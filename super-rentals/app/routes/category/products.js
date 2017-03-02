import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model(params) {

    const category = this.modelFor('category');
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
