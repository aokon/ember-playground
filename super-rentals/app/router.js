import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/'} );
  this.route('cart');

  this.mount('static-pages', { path: '/p' });
  this.mount('rentals-shop', { as: 'shop' });
});

export default Router;
