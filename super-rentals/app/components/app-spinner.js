import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['progress'],
  classNameBindings: ['loadingFinished:hide'],

  loadingFinished: computed('showSpinner', function() {
    return !this.get('showSpinner');
  })
});
