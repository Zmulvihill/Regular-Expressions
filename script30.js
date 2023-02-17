//Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;//Change this line
let result = myRegex.test(myString);// After passing the challenge experiment with myString and see how the grouping works
console.log(result)