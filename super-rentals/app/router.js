import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'} );
  this.route('contact');
  this.route('about');
  this.route('landing');
  this.route('cart');

  this.route('categories', function() {
    this.route('category', { path: '/:id' }, function() {
      this.route('products');
    });
  });
});

export default Router;
