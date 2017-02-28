const categories = [{
    type: 'category',
    id: 1,
    attributes: {
      name: 'Category 1',
      slug: 'category-1'
    }
  }, {
    type: 'category',
    id: 2,
    attributes: {
      name: 'Category 2',
      slug: 'category-2'
    }
  }, {
    type: 'category',
    id: 3,
    attributes: {
      name: 'Category 3',
      slug: 'category-3'
    }
  }, {
    type: 'category',
    id: 4,
    attributes: {
      name: 'Category 4',
      slug: 'category-4'
    }
  }
];

const rentals = [
  {
    type: 'rental',
    id: 1,
    attributes: {
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
      image: ''
    },
    includes: {
      category_id: 1
    }
  },
  {
    type: 'rental',
    id: 2,
    attributes: {
      name: 'Product 2',
      description: 'Lorem it amet, consetetur sadipscing elitr, sed diam ',
      image: ''
    },
    includes: {
      category_id: 2
    }
  },
  {
    type: 'rental',
    id: 3,
    attributes: {
      name: 'Product 3',
      description: 'Lorem it amet, consetetur sadipscing elitr, sed diam ',
      image: ''
    },
    includes: {
      category_id: 1
    }
  },
  {
    type: 'rental',
    id: 4,
    attributes: {
      name: 'Product 4',
      description: 'Lorem it amet, consetetur sadipscing elitr, sed diam ',
      image: ''
    },
    includes: {
      category_id: 3
    }
  },
];


export default function() {
  this.namespace = 'api';

  this.get('/categories', () => {
    return {
      data: categories
    };
  });

  this.get('/categories/:id', (_schema, request) => {
    const categoryId = Number(request.params.id);
    const category = categories.filter((category) => {
      return category.id === categoryId;
    })[0];

    return {
      data: category
    };
  });

  this.get('/rentals', (_schema, request) => {
    const categoryId = Number(request.queryParams['filter[id]']);
    const rentalsForCategory = rentals.filter((rental) => {
      return rental['includes'].category_id === categoryId;
    });

    return {
      data: rentalsForCategory
    };
  });
}
