const thingsImported = require('../index');

describe('math functions', () => {
   test('adds 1 + 2 to equal 3', () => {
      expect(thingsImported.sum(1, 2)).toBe(3);
   });
});

describe('async code functions', () => {
   test('adds 1 + 2 to equal 3', async () => {
      let result = await thingsImported.getTodo();
      expect(result.id).toBe(1);
   });
});
