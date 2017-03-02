import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i+1}`;
  },

  image() {
    return faker.image.city();
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
