import { addMonths, parseISO } from 'date-fns';
import Enrolment from '../models/Enrolment';
import DiscountPlan from '../models/DiscountPlan';

class EnrolmentController {
  async index(request, response) {
    const enrolments = await Enrolment.findAll();
    return response.json(enrolments);
  }

  async store(request, response) {
    const student_id = request.params.studentId;
    const { plan_id, start_date } = request.body;

    const plan = await DiscountPlan.findByPk(plan_id);

    if (!plan) {
      return response.status(400).json({ error: 'Invalid plan' });
    }

    const price = plan.price * plan.duration;
    const end_date = addMonths(parseISO(start_date), plan.duration);

    const enrolment = await Enrolment.create({
      plan_id,
      student_id,
      price,
      start_date,
      end_date,
    });

    return response.json(enrolment);
  }

  async update(request, response) {
    return response.json({});
  }

  async delete(request, response) {
    return response.json({});
  }
}

export default new EnrolmentController();
