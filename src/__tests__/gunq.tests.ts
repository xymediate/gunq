import { Gunqify } from '../gunqify';
test('Say Hello Carl', () => {
  expect(Gunqify().match(/\b[a-zA-Z0-9]{12}\b/)).toBeTruthy();
});

