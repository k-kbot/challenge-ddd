import { greet } from '../src/sample'

it('should return greet', () => {
  const result = greet('hello')
  expect(result).toBe('hello')
})
