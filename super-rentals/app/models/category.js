import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  name: attr(),
  slug: attr(),

  rentals: hasMany('rental')
});
