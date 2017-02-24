export default function() {
  this.namespace = 'api';

  this.get('/categories', function() {
    return {
      data: [{
          type: 'category',
          id: 1,
          attributes: {
            name: 'Category 1'
          }
        }, {
          type: 'category',
          id: 2,
          attributes: {
            name: 'Category 2'
          }
        }, {
          type: 'category',
          id: 3,
          attributes: {
            name: 'Category 3'
          }
        }, {
          type: 'category',
          id: 4,
          attributes: {
            name: 'Category 4'
          }
        }
      ]
    };
  });
}
