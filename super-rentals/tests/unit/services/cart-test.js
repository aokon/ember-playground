import { moduleFor, test } from 'ember-qunit';

moduleFor('service:cart', 'Unit | Service | cart', {
  // Specify the other units that are required for this test.
   //needs: ['service:store']
});

test('it able to store info about a new item', function(assert) {
  const itemId = 1;
  let service = this.subject();

  service.addItem(itemId);

  assert.ok(service.include(itemId));
  assert.equal(service.get('size'), 1);
});

test('it able to remove info about an item', function(assert) {
  const itemId = 1;
  let service = this.subject();

  service.addItem(itemId);
  service.removeItem(itemId);

  assert.notOk(service.include(itemId));
});
