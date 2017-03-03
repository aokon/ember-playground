import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  name: attr(),
  description: attr(),
  image: attr(),
  address: attr(),
  zipCode: attr(),
  city: attr(),
  rating: attr('number'),

  category: belongsTo('category')
});
