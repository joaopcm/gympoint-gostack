import Sequelize, { Model } from 'sequelize';

class Enrolment extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.FLOAT,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.DiscountPlan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Enrolment;
