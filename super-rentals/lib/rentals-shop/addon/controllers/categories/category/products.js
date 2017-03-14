import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  queryParams: ['rating'],
  rating: null,

  actions: {
    filterProducts(value) {
      this.set('rating', value);
      this.send('refreshCategory');
    }
  }
});
