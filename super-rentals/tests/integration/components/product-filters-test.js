import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-filters', 'Integration | Component | product filters', {
  integration: true
});

test('it invokes filter with valid rating value', function(assert) {
  const rating = 3;

  this.set('filter', (value) => {
    console.log(value);
    assert.equal(value, rating, 'It sends proper value');
  });

  this.render(hbs`{{product-filters filter=(action filter)}}`);

  this.$('input').val(rating);
  this.$('input').change();
  this.$('button').click();
});
