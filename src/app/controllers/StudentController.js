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

  async update(request, response) {
    const { student } = request;
    const { name, email, age, weigth, height } = await student.update(
      request.body
    );
    response.status(201).json({ name, email, age, weigth, height });
  }
}

export default new StudentController();
