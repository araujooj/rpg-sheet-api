import Sequelize, { Model } from 'sequelize';

class Equipments extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        armor_class: Sequelize.INTEGER,
        weight: Sequelize.STRING,
        observation: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'equipments',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Character, {
      foreignKey: 'character_id',
      as: 'character',
    });
  }
}

export default Equipments;
