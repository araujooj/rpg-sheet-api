import Sequelize, { Model } from 'sequelize';

class Character extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        classe: Sequelize.STRING,
        race: Sequelize.STRING,
        level: Sequelize.INTEGER,
        antecedent: Sequelize.STRING,
        tendency: Sequelize.STRING,
        personality: Sequelize.STRING,
        ideals: Sequelize.STRING,
        entails: Sequelize.STRING,
        weakness: Sequelize.STRING,
        characteristics: Sequelize.STRING,
        languages: Sequelize.STRING,
        armor_class: Sequelize.INTEGER,
        initiative: Sequelize.INTEGER,
        displacement: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'characters',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    this.belongsTo(models.User, { foreignKey: 'player' });
  }
}

export default Character;
