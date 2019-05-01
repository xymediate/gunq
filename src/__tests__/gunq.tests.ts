import * as config from '../../gunqify.json';
import { Gunqify } from '../gunqify';

test('Correct number of alphanumeric characters', () => {
  let regx = new RegExp(`\\b[a-zA-Z0-9]{${config.keyLength}}\\b`);
  expect(Gunqify().match(regx)).toBeTruthy();
});

test('Incorrect number of alphanumeric characters', () => {
  let regx = new RegExp(`\\b[a-zA-Z0-9]{${config.keyLength - 1}}\\b`);
  expect(Gunqify().match(regx)).toBeFalsy();
});
