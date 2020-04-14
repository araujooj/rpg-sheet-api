import Sequelize, { Model } from 'sequelize';

class Status extends Model {
  static init(sequelize) {
    super.init(
      {
        for: Sequelize.INTEGER,
        dex: Sequelize.INTEGER,
        con: Sequelize.INTEGER,
        int: Sequelize.INTEGER,
        sab: Sequelize.INTEGER,
        car: Sequelize.INTEGER,
        mod_for: Sequelize.INTEGER,
        mod_dex: Sequelize.INTEGER,
        mod_con: Sequelize.INTEGER,
        mod_int: Sequelize.INTEGER,
        mod_sab: Sequelize.INTEGER,
        mod_car: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'status',
      },
    );
    return this;
  }
}

export default Status;
