import Sequelize, { Model } from 'sequelize';

class DiscountPlan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
      },
      { sequelize }
    );

    return this;
  }
}

export default DiscountPlan;
