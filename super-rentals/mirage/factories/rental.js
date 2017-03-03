import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i+1}`;
  },

  description() {
    return faker.lorem.paragraph().substring(0, 200);
  },

  image() {
    return faker.image.city();
  },

  rating() {
    return faker.helpers.randomize([1, 2, 3, 4, 5]);
  },

  address() {
    return faker.address.streetAddress();
  },

  zipCode() {
    return faker.address.zipCode();
  },

  city() {
    return faker.address.city();
  }
});
