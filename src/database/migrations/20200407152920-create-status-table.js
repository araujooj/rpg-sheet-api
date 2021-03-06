module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('status', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    for: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dex: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    con: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    int: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sab: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    car: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_for: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_dex: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_con: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_int: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_sab: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mod_car: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('status'),
};
