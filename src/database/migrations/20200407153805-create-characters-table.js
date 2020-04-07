module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('characters', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    classe: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    race: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    antecedent: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tendency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    player: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    personality: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    ideals: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    entails: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    weakness: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    characteristics: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    languages: {
      type: Sequelize.STRING,
      allowNull: true,
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

  down: (queryInterface) => queryInterface.dropTable('characters'),
};
