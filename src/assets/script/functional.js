const division = (rate, text) => (num) => num % rate === 0 ? text : ''

export const FIZZ = division(3, 'Fizz')
export const BUZZ = division(5, 'Buzz')
