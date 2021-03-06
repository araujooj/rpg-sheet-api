module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('speciality', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    acrobacy: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    arcanism: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    atletism: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    acting: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    cheat: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    stealth: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    story: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    intimidation: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    investigation: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    animal_petting: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    medicine: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    nature: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    perception: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    persuasion: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    prestidigitation: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    religion: {
      type: Sequelize.INTEGER,

      allowNull: false,
    },
    survival: {
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

  down: (queryInterface) => queryInterface.dropTable('speciality'),
};
