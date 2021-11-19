import { hello } from '../src/index';

test('test hello', () => {
  expect(hello('123')).toBe('hello 123');
});
