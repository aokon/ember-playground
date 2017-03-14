import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('landing');

  this.route('categories', function() {
    this.route('category', { path: '/:id' }, function() {
      this.route('products');
    });
  });
});
