import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting /contact', function(assert) {
  visit('/contact');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
    assert.equal(find('h2').text(), 'Contact',
      'It has valid title');
    assert.equal(find('p').length, 2,
      'It has valid content paragraphs number');
    assert.equal(find('address').text().trim(),
      "1212 Test Address Avenue\n      Testington, OR 97233",
      'It has valid address details');
    assert.equal(find('a[href$="tel:503.555.1212"]').length, 1,
      'It has contact by phone link');
    assert.equal(find('a[href$="mailto:superrentalsrep@emberjs.com"]').length,
      1, 'It has maito link');
  });
});
