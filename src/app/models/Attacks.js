import Sequelize, { Model } from 'sequelize';

class Attacks extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        bonus: Sequelize.STRING,
        damage: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'attacks',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Character, { foreignKey: 'character_id', as: 'character' });
  }
}

export default Attacks;
