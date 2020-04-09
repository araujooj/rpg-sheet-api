import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import Character from '../app/models/Character';
import Magics from '../app/models/Magics';
import Attacks from '../app/models/Attacks';
import Equipments from '../app/models/Equipments';
import Status from '../app/models/Status';

import databaseConfig from '../config/database';

const models = [User, File, Character, Magics, Attacks, Equipments, Status];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
