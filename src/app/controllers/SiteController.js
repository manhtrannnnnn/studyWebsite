const Course = require('./models/Course');
const {mutipleMongooseToObject} = require('../../until/mongoose');
class SiteController {
    // [Get] /news
    async home(req, res, next) {
        Course.find({})
            .then(courses =>{
                res.render('home', {
                    courses : mutipleMongooseToObject(courses),
                });
            })
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
