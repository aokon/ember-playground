import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Resolver from 'ember-resolver';
import Ember from 'ember';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: 'rentals-shop'
};

moduleForComponent('category-sidebar', 'Integration | Component | category list', {
  integration: true,
  resolver
});

test('it renders', function(assert) {
  const categories = [
    Ember.Object.create({name: 'Cat 1'}),
    Ember.Object.create({name: 'Cat 2'}),
  ]

  this.set('model', categories);

  this.render(hbs`{{category-list categories=model}}`);

  assert.equal(this.$('li').length, 2, 'It renders list entries');
});
