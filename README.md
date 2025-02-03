# JavaScript Loose Equality Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose equality (==) and the handling of null and zero values. The bug arises from the fact that 0 == null evaluates to true in JavaScript due to type coercion.  This can lead to unexpected behavior if not handled carefully.

## Bug Description
The provided JavaScript function `foo` attempts to add two numbers.  However, it incorrectly handles cases where either `a` or `b` is null or zero.  When using loose equality, 0 == null is true leading to a null value being returned when a mathematical sum is expected.

## Solution
The solution uses strict equality (===) to avoid type coercion. Strict equality checks both the value and the type. This prevents the accidental equality of 0 and null.