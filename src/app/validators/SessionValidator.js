import * as Yup from 'yup';

class SessionValidator {
  async store(request, response, next) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
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
