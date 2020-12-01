
const { saltRounds } = require('../config');

module.exports = (mongoose, bcrypt) => {

    const { Schema, model: Model } = mongoose;
    const { String, ObjectId } = Schema.Types;

    const userSchema = new Schema({

        email: {
            type: String,
            required: true,
            unique: true
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        offersBought: [ //ще е колекция/масив, елементите вътре ще са от тип objectId
            {
                type: ObjectId,
                ref: 'Shoe',
            }
        ]
    });

    userSchema.methods = {
        comparePasswords(password){
            return bcrypt.compare(password, this.password)
        }
    }

    userSchema.pre('save', function(next) {

        if(!this.isModified('password')){
            next();
            return;
        }
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { //ако тук или долу в hash имаме грешка, ще я хендълнем в catch-a na create user в userController
                next(err);
                return;
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            })
        })
    })

    return Model('User', userSchema);
};