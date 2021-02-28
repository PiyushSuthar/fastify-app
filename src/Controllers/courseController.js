const Course = require('../Models/Course')

// get All Courses
exports.getCourse = async (req, reply) => {
    try {
        const courses = await Course.find()
        return courses
    } catch (error) {
        throw error
    }
}

// get single course
exports.getSingleCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = await Course.findById(courseId)
        return course
    } catch (error) {
        throw error
    }
}

// add a course
exports.addCourse = async (req, reply) => {
    try {
        const course = new Course(req.body)
        return course.save()
    } catch (error) {
        throw error
    }
}

// Update an existing course

exports.updateCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = req.body
        const { ...updatedCourse } = course
        const update = await Course.findByIdAndUpdate(courseId, updatedCourse, { new: true })
        return update
    } catch (error) {
        throw error
    }
}

// Delete Route
exports.deleteCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = Course.findByIdAndDelete(courseId)
        return course
    } catch (error) {
        throw error
    }
}