const { Shoe } = require('../models');
const { cookie } = require('../config');

module.exports = {
    get: { // Всички GET контролери визуализират дадено view
        all(req, res, next) { //all е функция от тип middleware, която приема req, res и next. Това е контролера, който ще визуализира all.
            Shoe
                .find({})
                .lean()
                .then((shoes) => {
                    res.render('./shoes/shoes.hbs', { shoes }); //закачаме ги за контекста, след като сме ги взели shoes
                })
                .catch((e) => console.log(e));
        },
        create(req, res, next) {
            res.render('./shoes/create.hbs')
        },
        details(req, res, next) {
            Shoe
                .findOne({ _id: req.params.shoeId })
                .lean()
                .then((shoe) => {
                    res.render('./shoes/details.hbs', { ...shoe });
                })
        },
        edit(req, res, next) {
            Shoe
                .findOne({ _id: req.params.shoeId })
                .then((shoe) => {
                    res.render('./shoes/edit.hbs', shoe)
                })
        },
        delete(req, res, next) {
            Shoe.deleteOne({ _id: req.params.shoeId })
                .then((result) => {
                    res.redirect('/shoes/shoes');
                })
        }
    },
    post: {
        create(req, res, next) {
            Shoe
                .create({ ...req.body, salesman: req.user._id }) //деструкторираме за да направим копие. Не получаваме вс неща - salesman nqmame. ot Mdw auth навсякъде където и да кажем req.user ще получим обект с email i fullName i id
                .then((createdShoeOffer) => {
                    res.redirect('/shoes/shoes');
                })
        },
        edit(req, res, next) {
            const { shoeId } = req.params;
            Shoe
                .updateOne({ _id: shoeId }, { $set: { ...req.body } }) //първо подаваме филтъра, и като втори параметър подаваме това, което искаме да променим като намерим елемент с това ид, но ще използваме $set за да променим само някои от нещата, не всички от Монгоосе 
                .then((updatedShoeOffer) => {
                    res.redirect(`/shoes/details/${shoeId}`);
                })
        }
    }
}