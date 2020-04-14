module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('status', 'character_id', {
    type: Sequelize.INTEGER,
    references: { model: 'characters', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('status', 'character_id'),
};
