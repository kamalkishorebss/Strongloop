module.exports = function(app) {
  app.dataSources.postgresql.automigrate('person', function(err) {
    if (err) throw err;

    app.models.person.create([
    // {
    //   firstname: 'abc',
    //   lastname: 'xyz'
    // }, {
    //   firstname: 'xyz',
    //   lastname: 'abc'
    // }, {
    //   firstname: 'jkl',
    //   lastname: 'lkj'
    // }, 
    ], function(err, person) {
      if (err) throw err;

      console.log('Models person created: \n', person);
    });
  });
};