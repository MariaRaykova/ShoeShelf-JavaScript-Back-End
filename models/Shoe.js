

module.exports = (mongoose) => {

    const { Schema, model: Model } = mongoose;
    const { String, ObjectId, Number } = Schema.Types;

    const shoeSchema = new Schema({

        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        // createdAt: {
        //     type: String,
        //     required: true,
        // },
        salesman: {
            type: ObjectId,
            required: true,
        },
        buyers: [ //ще е колекция/масив, елементите вътре ще са от тип objectId
            {
                type: ObjectId,
                ref: 'User',
            }
        ]
    });
    return Model('Shoe', shoeSchema);
};