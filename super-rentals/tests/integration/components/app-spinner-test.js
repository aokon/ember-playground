import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-spinner', 'Integration | Component | app spinner', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-spinner}}`);

  assert.equal(this.$('.indeterminate').length, 1, 'Is able to show progress');
});
