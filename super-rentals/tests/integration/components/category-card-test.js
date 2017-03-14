import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Resolver from 'ember-resolver';
import Ember from 'ember';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: 'rentals-shop'
};

moduleForComponent('category-card', 'Integration | Component | category card', {
  integration: true,
  resolver
});

test('it renders', function(assert) {
  const category = Ember.Object.create({ name: "Category 1"});
  this.set('category', category);

  this.render(hbs`{{category-card category=category}}`);

  assert.equal(this.$('.card-title').text().trim(), category.get('name'),
    'It has valid category name');
  assert.equal(this.$('.card-action a:contains("See rentals")').text().trim(),
    'See rentals', 'It has see category rentals link');
});
