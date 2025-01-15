function foo(a, b) {
  // Check for null values explicitly
  if (a === null || b === null) {
    return 0; 
  }
  // More robust handling of falsy or invalid inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Invalid input type');
  }
  return a + b; 
}