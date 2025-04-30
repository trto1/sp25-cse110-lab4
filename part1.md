# Answers:
1. Line 9 prints: **values add: 20**
2. Line 13 prints: **final result: 20**
3. Declaring variables with var leads to unpredictability and more bug-prone programs. One, its property being function-scoped instead of block-scoped may lead to accidental erasure of already declared variable, or unwanted repeated usage of a variable. Second, its hoisting behavior may lead to undefined behavior as well.
4. Line 9 prints: **values add: 20**
5. Line 13 returns an error. This is because the variable *result* is declared with *let*, meaning its scope is only within the if function.
6. Constant variables can't be reassigned, so the program would already throw an error at line 7. *result* would still be 0.
7. Same as question 6. Line 7 would already throw an error, and *result* remains 0.