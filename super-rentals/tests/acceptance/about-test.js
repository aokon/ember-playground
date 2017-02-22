import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
    assert.equal(find('h2').text(), 'About Us', 'It has valid title');
    assert.equal(find('p').length, 2, 'It has content paragraphs');
  });
});
