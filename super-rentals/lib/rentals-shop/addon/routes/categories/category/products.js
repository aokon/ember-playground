import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  store: inject.service(),

  model(params) {
    const category = this.modelFor('categories.category');
    const queryParams = {
      category_id: category.get('id'),
      ...params
    };

    return this.get('store').query('rental', { filter: queryParams });
  },

  actions: {
    refreshCategory() {
      this.refresh();
    }
  }
});
