import Sequelize, { Model } from 'sequelize';

class Speciality extends Model {
  static init(sequelize) {
    super.init(
      {
        acrobacy: Sequelize.INTEGER,
        arcanism: Sequelize.INTEGER,
        atletism: Sequelize.INTEGER,
        acting: Sequelize.INTEGER,
        cheat: Sequelize.INTEGER,
        stealth: Sequelize.INTEGER,
        story: Sequelize.INTEGER,
        intimidation: Sequelize.INTEGER,
        investigation: Sequelize.INTEGER,
        animal_petting: Sequelize.INTEGER,
        medicine: Sequelize.INTEGER,
        nature: Sequelize.INTEGER,
        perception: Sequelize.INTEGER,
        persuasion: Sequelize.INTEGER,
        prestidigitation: Sequelize.INTEGER,
        religion: Sequelize.INTEGER,
        survival: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'speciality',
      },
    );
    return this;
  }
}

export default Speciality;
