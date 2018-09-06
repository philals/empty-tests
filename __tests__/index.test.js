const thingsImported = require('../index');

describe('math functions', () => {
   test('adds 1 + 2 to equal 3', () => {
      expect(thingsImported.sum(1, 2)).toBe(3);
   });
});

describe('async code functions', () => {
   // test('gets the first todo', async () => {
   //    let result = await thingsImported.getTodo(1);
   //    expect(result.id).toBe(1);
   // });

   describe('when passed a spefic todo ID', () => {
      function fetchFunction(location) {
         return {
            json: () => {
               id: 1
            }
         }
      }

      let ids = [1, 2, 3];
      ids.map((id) => {
         describe('when the ID is ' + id, () => {
            test('gets the Todo for that ID', async () => {
               let result = await thingsImported.getTodo(id, fetchFunction));
            expect(result.id).toBe(id)
         });
      });
   });

   // function fetchFunction(location) {

   // }

   // test('gets the Todo for that ID', async () => {
   //    let result = await thingsImported.getTodo(1);
   //    expect(result.id).toBe(1);
   // });
});
});
