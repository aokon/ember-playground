import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | landing');

test('visiting / redirects to /landing', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/landing');
  });
});

test('displays landing', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.category-card').length, 4,
      'It renders default categories');
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
