import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const {
  Service,
  computed,
  inject
} = Ember;

export default Service.extend({
  store: inject.service(),
  itemIds: storageFor('cart'),

  addItem(itemId) {
    if(!this.include(itemId)) {
      this.get('itemIds').pushObject(itemId);
    }
  },

  removeItem(itemId) {
    this.get('itemIds').removeObject(itemId);
  },

  items() {
    let items = [];
    if(this.get('hasItems')) {
      const params = { rental_ids: JSON.stringify(this.get('itemIds.content')) };

      items = this.get('store').query('rental', { filter: params });
    }

    return items;
  },

  include(itemId) {
    return this.get('itemIds').includes(itemId);
  },

  size: computed('itemIds.[]', function() {
    return this.get('itemIds.length');
  }),

  hasItems: computed.gt('size', 0)
});
