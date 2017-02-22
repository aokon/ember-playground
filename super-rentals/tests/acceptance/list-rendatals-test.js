import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rendatals');

test('visiting / redirects to /rentals', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/rentals');
  });
});

test('displays rentals', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.rental').length, 3, 'It renders default rentals');
  });
});

test('displaying the contact link ', function(assert) {
  visit('/');
  click('a:contains("Contact")');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('displaying the About link ', function(assert) {
  visit('/');
  click('a:contains("About")');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});
