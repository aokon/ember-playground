import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
  Service,
  computed
} = Ember;

export default Service.extend({
  productIds: storageFor('cart'),

  addItem(productId) {
    if(!this.include(productId)) {
      this.get('productIds').pushObject(productId);
    }
  },

  removeItem(productId) {
    this.get('productIds').removeObject(productId);
  },

  include(productId) {
    return this.get('productIds').includes(productId);
  },

  size: computed('productIds.[]', function() {
    return this.get('productIds.length');
  })

});
