import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' } );

  this.mount('static-pages', { path: '/p' });
  this.mount('rentals-shop', { as: 'shop' });
  this.mount('shopping-cart');
});

export default Router;
