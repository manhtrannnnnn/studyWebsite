const Course = require('./models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();