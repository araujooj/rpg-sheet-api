
module.exports = {
  up: (QueryInterface) => QueryInterface.bulkInsert(
    'magics',
    [
      {
        name: 'Cowboy',
        level: 2,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cowboy',
        level: 5,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cowboy',
        level: 5,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cowboy',
        level: 5,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cowboy',
        level: 5,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cowboy',
        level: 5,
        character_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
