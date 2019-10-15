import * as Yup from 'yup';

import Student from '../models/Student';

class StudentValidator {
  async store(request, response, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .required()
        .min(0),
      weigth: Yup.number()
        .required()
        .min(0),
      height: Yup.number()
        .required()
        .min(0),
    });

    try {
      await schema.validate(request.body);

      const studentExists = await Student.findOne({
        where: { email: request.body.email },
      });
      if (studentExists)
        return response.status(401).json({ error: 'Student already exists' });

      return next();
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }
}

export default new StudentValidator();
