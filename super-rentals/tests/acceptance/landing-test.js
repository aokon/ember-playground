import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | landing');

test('visiting / redirects to /landing', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/landing');
  });
});

test('displays categories', function(assert) {
  server.create('category', { name: "Cat 1" });

  visit('/');

  andThen(function() {
    assert.equal(find('.category-card').length, 1,
      'It renders default categories');
  });
});

test('displaying the contact link ', function(assert) {
  visit('/');
  click('a:contains("Contact")');

  andThen(function() {
    assert.equal(currentURL(), '/p/contact');
  });
});

test('displaying the About link ', function(assert) {
  visit('/');
  click('a:contains("About")');

  andThen(function() {
    assert.equal(currentURL(), '/p/about');
  });
});
