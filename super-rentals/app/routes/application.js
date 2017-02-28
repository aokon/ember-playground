import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions:{
    loading(transition) {
      const controller = this.controllerFor('application');

      controller.set('showSpinner', true);
      transition.promise.finally(function() {
        controller.set('showSpinner', false);
      });
    }
  }
});
