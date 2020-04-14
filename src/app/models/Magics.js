import Sequelize, { Model } from 'sequelize';

class Magics extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        level: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'magics',
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

export default Magics;
