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

      const emailAlreadyInUse = await Student.findOne({
        where: { email: request.body.email },
      });
      if (emailAlreadyInUse)
        return response.status(401).json({ error: 'Student already exists' });

      return next();
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }

  async update(request, response, next) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number().min(0),
      weigth: Yup.number().min(0),
      height: Yup.number().min(0),
    });

    try {
      await schema.validate(request.body);

      const { id } = request.params;

      const student = await Student.findOne({
        where: { id },
      });

      if (!student)
        return response.status(401).json({ error: 'Student does not exist' });

      request.student = student;

      if (request.body.email) {
        const studentAlreadyExists = await Student.findOne({
          where: { email: request.body.email },
        });
        if (studentAlreadyExists)
          return response.status(401).json({
            error: 'You cannot set this email, because it already in use',
          });
      }

      return next();
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }
}

export default new StudentValidator();
