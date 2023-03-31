import ArrayBufferConverter from '../basic';

test('buffer convert', () => {
  const obj = new ArrayBufferConverter();
  const data = obj.load();
  const result = obj.toString(data);
  expect(data).toBeDefined();
  expect(result).toBeDefined();
});
