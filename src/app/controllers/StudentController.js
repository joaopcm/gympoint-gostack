import Student from '../models/Student';

class StudentController {
  async index(_request, response) {
    const students = await Student.findAll();
    return response.json(students);
  }

  async store(request, response) {
    const student = await Student.create(request.body);
    return response.status(201).json(student);
  }

  async update(request, response) {
    const { student } = request;
    const { name, email, age, weigth, height } = await student.update(
      request.body
    );
    response.json({ name, email, age, weigth, height });
  }
}

export default new StudentController();
