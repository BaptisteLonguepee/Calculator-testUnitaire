import {add, multiply, subtract} from '../../src/utils';
import { test, expect } from 'vitest';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtract 2 - 2 to equal 0', () => {
    expect(subtract(2, 2)).toBe(0);
});

test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});