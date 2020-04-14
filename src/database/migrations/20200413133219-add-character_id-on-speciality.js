module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('speciality', 'character_id', {
    type: Sequelize.INTEGER,
    references: { model: 'characters', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('speciality', 'character_id'),
};
