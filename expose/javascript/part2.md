# Answers:
1. Line 12 prints: 3. Variable *i* is accessible outside of the for loop because it was declared with *var*. It goes 0, 1, 2 and gets implemented once more in the final loop.
2. Line 13 prints: 150. Variable *discountedPrice* is reassigned everytime with each loop, but again *var* is function-scoped not block-scoped so it is still accessible outside of the for loop. In the final loop, it is half of 300 or 150.
3. Line 14 prints: 150. In the final loop, *finalPrice* is reassigned to be the rounded *discountedPrice*, which is   150.
4. This function returns the *discounted* array of [50, 100, 150]. The function works correctly and return the prices in half.
5. Line 12 causes an error. The for loop runs correctly, but since *i* is declared with *let*, the variable will not be accessible outside of the loop.
6. Same case as question 5, since *discountedPrice* is declared with *let* inside the loop, the variable will not be accessible outside of the loop, hence Line 13 throwing an error.
7. Line 14 prints: 150. The program runs correctly, and in the final loop, *finalPrice* is reassigned to be 150. The variable is still accessible since it was declared outside of the loop.
8. This function returns the *discounted* array of [50, 100, 150]. The function works correctly and return the prices in half.
9. Line 11 causes an error. *i* is declared with let so the variable won't be accessible outside of the for loop.
10. Line 12 prints: 3. The constant length was declared to be 3 (length of the prices array) and does not get altered.
11. The function returns the *discounted* array of [50, 100, 150] correctly. The variable *discounted* is a constant, and although you can't reassign the variable, the array it's referencing can still be changed.
12. Notations:
    A: student.name
    B: student["Grad Year"]
    C: student.greeting()
    D: student["Favorite Teacher"].name
    E: student.courseLoad[0]
13. 
    A:'32'. The + operator with a string leads to a string concatenation where the integer 2 is converted to '2'
    B: 1, the - operator, vice versa, converts '3' into a number, so the operation is 3-2=1.
    C: 3, null is 0 in integer arithmetic.
    D: '3null'. String concatenation where null is a literal 'null' string.
    E: 4, true is 1 in integer arithmetic.
    F: 0, both false and null counts as 0 in integer arithmetic.
    G: Same as D, undefined here is a literal "undefined" string in the concatenation.
    H: NaN. '3' gets converted into a number, but undefined in integer arithmetic is Nan.
14. 
    A: true, 2 gets converted into a number where 2 > 1
    B: false, both are strings so they get compared lexicographically where the first character '2' is larger than '1'.
    C: true, '2' becomes 2, so 2==2
    D: false,  since === compares both the type and value, and number isn't string and vice versa.
    E: false, since true is 1.
    F: true, Boolean() with any integer is true.
15. '==' checks to see if two values are equal. It supports type conversion and convert as necessary. On the other hand, '===' checks for both value and type, so it will only return true if both area matches.
17. [2, 4, 6]. The modifyArray function takes in an array and another function called doSomething(num), which doubles the input number. modifyArray loops through each element in the array and applies doSomething to it. Hence, a new array returned with all of its elements doubled.
19. 1
    4
    3
    2