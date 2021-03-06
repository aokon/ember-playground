import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

export default Controller.extend({
  cart: inject.service(),

  actions: {
    removeItem() {
      this.send('refresh');
    },
  }
});
