import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting /contact', function(assert) {
  visit('/contact');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
    assert.equal(find('h1').text(), 'Contact', 'It has valid title');
    assert.equal(find('p').length, 2, 'It has content paragraphs');
  });
});
