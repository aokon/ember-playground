import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
  belongsTo
} = DS;

const {
  computed
} = Ember;

export default Model.extend({
  name: attr(),
  description: attr(),
  image: attr(),
  address: attr(),
  zipCode: attr(),
  city: attr(),
  currency: attr(),
  rating: attr('number'),
  price: attr('number'),

  priceWithCurrency: computed('price', 'currency', function() {
    return `${this.get('price')}${this.get('currency')}`;
  }),

  category: belongsTo('category')
});
