import * as Yup from 'yup';

class SessionValidator {
  async store(request, response, next) {
    const schema = Yup.object().shape({
      email: Yup.string('Email should be a string').required(
        'Email is required'
      ),
      password: Yup.string('Password should be a string').required(
        'Password is required'
      ),
    });

    try {
      await schema.validate(request.body);
      return next();
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }
  }
}

export default new SessionValidator();
