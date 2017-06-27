module.exports = function(app) {
  app.dataSources.postgresql.automigrate('product', function(err) {
    if (err) throw err;

    app.models.product.create([
    


    ], function(err, product) {
      if (err) throw err;

      console.log('Models product created: \n', product);
    });
  });
};