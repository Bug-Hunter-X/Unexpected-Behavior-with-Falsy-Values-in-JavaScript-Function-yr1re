# Unexpected Behavior with Falsy Values in JavaScript Function

This repository demonstrates a common JavaScript bug related to handling falsy values in function parameters.

## Bug Description

The original `foo` function handles `null` values correctly but fails to consider other falsy values like `0`, `""`, or `false`. This can lead to unexpected results or silent errors.  Additionally, the function doesn't explicitly handle other object types that may be passed as arguments which may also lead to unexpected behaviours.

## Bug Solution

The improved solution uses strict equality (`===`) to check for null specifically, adding explicit checks for other relevant falsy values or using a more robust method for input validation.