import DiscountPlan from '../models/DiscountPlan';

class DiscountPlanController {
  async index(_request, response) {
    const plans = await DiscountPlan.findAll();
    return response.json(plans);
  }

  async store(request, response) {
    const plan = await DiscountPlan.create(request.body);
    return response.json(plan);
  }

  async update(request, response) {
    const { id } = request.params;
    const plan = await DiscountPlan.findByPk(id);

    if (!plan) {
      return response.status(400).json({ error: 'Invalid plan' });
    }

    await plan.update(request.body);

    return response.json(plan);
  }

  async delete(request, response) {
    const { id } = request.params;

    await DiscountPlan.destroy({ where: { id } });

    return response.send();
  }
}

export default new DiscountPlanController();
