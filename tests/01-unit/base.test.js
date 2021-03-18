beforeAll(() => {
  console.log(
    'Declarations or assigments for every test in the file at the beggining, useful with async functions',
  );
});
afterAll(() => {
  console.log(
    'afterAll: Actions needed to be done at the end of the whole test.',
  );
});

describe('Test base as template', () => {
  beforeEach(() => {
    console.log(
      'beforeEach: Actions to be done for each block in the main describe block',
    );
  });
  test('Here goes the first thing to check', () => {
    expect(true).toBe(true);
    console.log('Fist test message in outter describe');
  });
  describe('Inner describe block with specific actions', () => {
    afterEach(() => {
      console.log(
        'afterEach iteration, performs an action needed everytime only in this describe block',
      );
    });
    test('Inner condition to test', () => {
      expect(true).toBe(true);
      console.log('Second test message in inner describe block');
    });
  });
});
