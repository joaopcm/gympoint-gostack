import Student from '../models/Student';

class StudentController {
  async index(_request, response) {
    const students = await Student.findAll();
    return response.json(students);
  }

  async store(request, response) {
    const { name, email, age, weigth, height } = request.body;
    const student = await Student.create({ name, email, age, weigth, height });
    return response.json(student);
  }
}

export default new StudentController();
