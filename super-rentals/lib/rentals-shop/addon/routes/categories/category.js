import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  store: inject.service(),

  model(params) {
    return this.get('store').peekRecord('category', params.id);
  }
});
