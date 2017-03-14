import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Resolver from 'ember-resolver';
import Ember from 'ember';

const cartStub = Ember.Service.extend({
  items: [],
  include() {
    return true;
  }
});

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: 'rentals-shop'
};

moduleForComponent('product-card', 'Integration | Component | product card', {
  integration: true,
  resolver,
  beforeEach() {
    this.register('service:cart', cartStub);
    this.inject.service('cart', { as: 'cart' });
  }
});

test('it renders', function(assert) {
  const product = Ember.Object.create({
    name: 'Nice Flat',
    description: 'Dummy desc'
  });

  this.set('product', product);

  this.render(hbs`{{product-card product=product}}`);

  assert.equal(this.$('.card-title').text().trim(), product.get('name'),
    'It has valid card-title');

  assert.equal(this.$('.card-content .product-description').text().trim(),
    product.get('description'), 'It has valid description');
});
