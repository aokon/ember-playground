import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('category', params.id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.get('store').query('rental', { filter: { id: model.get('id') }}).
      then((rentals) => {
        controller.set('rentals', rentals);
      });
  },

  deactivate() {
    this.controllerFor('category').set('rentals', []);
  }
});
