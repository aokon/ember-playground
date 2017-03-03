export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  server.createList('category', 10).forEach((category) => {
    server.createList('rental', 10, { relationships: {
      category: {
        data: {
          id: category.id, type: 'category'
        }
      }
    }});
  });
}
