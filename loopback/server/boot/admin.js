module.exports = function(app) {
  app.dataSources.postgresql.automigrate('admin', function(err) {
    if (err) throw err;

    app.models.admin.create([
    


    ], function(err, admin) {
      if (err) throw err;

      console.log('Models admin created: \n', admin);
    });
  });
};