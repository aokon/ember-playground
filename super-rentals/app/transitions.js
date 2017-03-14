export default function() {
  this.transition(
    this.fromRoute('landing'),
    this.toRoute('category'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('landing'),
    this.toRoute('static-pages.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('landing'),
    this.toRoute('static-pages.contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('categories'),
    this.toRoute('static-pages.contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('categories'),
    this.toRoute('static-pages.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('static-pages.contact'),
    this.toRoute('static-pages.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('cart'),
    this.toRoute('static-pages.about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('cart'),
    this.toRoute('static-pages.contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('cart'),
    this.toRoute('landing'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.hasClass('in-cart'),
    this.toValue(true),
    this.use('fade'),
    this.reverse('toLeft')
  );

  this.transition(
    this.hasClass('empty-cart'),
    this.toValue(false),
    this.use('fade'),
    this.reverse('toLeft')
  );
}
