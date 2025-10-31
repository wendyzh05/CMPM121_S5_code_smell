# Section 5 – Refactoring Code Smells in Practice

1. Unclear Variable Names: variables like a, b, and c didn't communicate their purpose. Therefore, I changed to a more meaningful names for the variables such as incrementID, counterID, and headingText.

2. Duplicated code: The same three lines that updated the counter display appeared in all three button event listeners. As a solution, I created a helper function updateDisplay() to handle the duplicated code.

3. Speculative generality: The extra start() function existed only to call setup() which is unnecessary. Therefore, I deleted the function and called setup directly at the end.

4. Comments: Excessive comments for each line of code. As a solution, I deleted and left comments that are necessary to explain each section of the code.
