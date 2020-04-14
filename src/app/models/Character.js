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
        character_id: Sequelize.VIRTUAL,
        speciality_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'characters',
      },
    );
    return this;
  }

  static associate(models) {
    this.hasOne(models.Status, { foreignKey: 'character_id', as: 'status' });
    this.hasOne(models.Speciality, {
      foreignKey: 'character_id',
      as: 'expertise',
    });
    this.belongsTo(models.User, { foreignKey: 'player', as: 'player_info' });
    this.hasMany(models.Magics, {
      foreignKey: 'character_id',
      as: 'magic_info',
    });
    this.hasMany(models.Attacks, {
      foreignKey: 'character_id',
      as: 'attacks_info',
    });
    this.hasMany(models.Equipments, {
      foreignKey: 'character_id',
      as: 'equips_info',
    });
  }
}

export default Character;
