/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman([123])).toBe(false)
  expect(convertBytesToHuman('456')).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
  expect(convertBytesToHuman(-1024)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(123456789)).toBe('117.74 MB')
});

