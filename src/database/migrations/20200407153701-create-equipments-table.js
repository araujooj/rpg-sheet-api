module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('equipments', {
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
    armor_class: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    observation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    character_id: {
      type: Sequelize.INTEGER,
      references: { model: 'characters', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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

  down: (queryInterface) => queryInterface.dropTable('equipments'),
};
