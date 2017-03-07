import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('category-sidebar', 'Integration | Component | category list', {
  integration: true
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
