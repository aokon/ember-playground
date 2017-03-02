const serializeToJSONAPI = function(type, attrs) {
  return({
    type: type,
    id: attrs.id,
    attributes: attrs
  });
};

export default function() {
  this.namespace = 'api';

  this.get('/categories', (schema) => {
    const categories = schema.db.categories.map((attrs) => {
      return serializeToJSONAPI('category', attrs);
    });

    return { data: categories };
  });

  this.get('/categories/:id', (schema, request) => {
    const categoryId = parseInt(request.params.id);
    const category = schema.db.categories.find(categoryId);

    return { data: serializeToJSONAPI(category) };
  });

  this.get('/rentals', (_schema, request) => {
    const categoryId = parseInt(request.queryParams['filter[category_id]']);
    const rating = parseInt(request.queryParams['filter[rating]']);
    let rentalsForCategory = rentals.filter((rental) => {
      return rental['includes'].category_id === categoryId;
    });

    if(rating) {
      rentalsForCategory = rentalsForCategory.filter((rental) => {
        return rental.attributes.rating >= rating;
      });
    }

    return { data: rentalsForCategory };
  });
}
