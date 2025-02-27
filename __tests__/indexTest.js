const testableMethod = require('../index');

test('returns same value that is sent', () => {
    expect(testableMethod(true)).toBe(true);
});