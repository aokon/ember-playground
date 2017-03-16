import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  cart: inject.service(),

  model() {
    return this.get('cart').items();
  },

  actions: {
    refresh() {
      this.refresh();
    }
  }
});
