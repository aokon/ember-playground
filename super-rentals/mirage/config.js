const serializeToJSONAPI = function(type, attrs) {
  const relationships = attrs.relationships;
  delete attrs.relationships;
  const output = {
    type: type,
    id: attrs.id,
    attributes: attrs
  };

  if(relationships) {
    output['relationships'] = relationships;
  }

  return output;
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
    const categoryId = request.params.id;
    const category = schema.db.categories.find(categoryId);

    return { data: serializeToJSONAPI('category', category) };
  });

  this.get('/rentals', (schema, request) => {
    const categoryId = request.queryParams['filter[category_id]'];
    const rating = request.queryParams['filter[rating]'];
    let rentalIds = request.queryParams['filter[rental_ids]'];
    let rentalsForCategory;

    if(categoryId) {
      rentalsForCategory = schema.db.rentals.where(function(rental) {
        return rental.relationships.category.data.id === categoryId;
      });
    }

    if(rentalIds) {
      rentalIds = JSON.parse(rentalIds);

      rentalsForCategory = schema.db.rentals.where(function(rental) {
        return rentalIds.includes(rental.id);
      });
    }

    if(rating) {
      rentalsForCategory = rentalsForCategory.filter((rental) => {
        return rental.rating >= rating;
      });
    }

    rentalsForCategory = rentalsForCategory.map((rental) => {
      return serializeToJSONAPI('rental', rental);
    });

    return { data: rentalsForCategory };
  });
}
