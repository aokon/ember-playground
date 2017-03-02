export default function() {
  this.transition(
    this.fromRoute('landing'),
    this.toRoute('category'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('landing'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('landing'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('category'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('category'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
