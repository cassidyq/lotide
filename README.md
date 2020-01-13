# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cassidyq/lotide`

**Require it:**

`const _ = require('@cassidyq/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes in an array and returns the first value of the array.
* `tail(array)`: takes in an array and returns the tail of the array (without the first value).
* `middle(array)`: takes in an array and returns an array with the middle value(s), if the given array only has 1 or 2 values it returns an empty array.