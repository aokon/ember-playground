import Ember from 'ember';

const {
  Component,
  inject,
  computed
} = Ember;

export default Component.extend({
  cart: inject.service(),
  isInCart: computed('product', 'cart.size', function() {
    return this.get('cart').include(this.get('product.id'));
  }),

  actions: {
    addToCart() {
      this.get('cart').addItem(this.get('product.id'));
    },

    removeFromCart() {
      this.get('cart').removeItem(this.get('product.id'));
    }
  }
});
