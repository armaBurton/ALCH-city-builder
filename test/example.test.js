// IMPORT MODULES under test here:
import { createCountString } from '../script/utils.js';

const test = QUnit.test;


test('function should take three numbers and return string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `100`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(1, 0, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
