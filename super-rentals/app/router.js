import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'} );
  this.route('landing');
  this.route('cart');

  this.route('categories', function() {
    this.route('category', { path: '/:id' }, function() {
      this.route('products');
    });
  });

  this.mount('static-pages', { path: '/p' });
});

export default Router;
