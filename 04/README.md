## Questions

* What are Angular expressions? How do they compare to tags from templating engines you've used before?

Angular expressions are expressions that can be evaluated inside of double brackets, such as accessing a value from an object, or multiplying to integers together. Angular expressions look similar, but you shouldn't do too much logic in the view section of your code in Angular, whereas in HB you could do iterative loops and if statements in the view.

* What happens when you write invalid code in an expression? What type of error do you get?

I just got either the double-brackets with my sloppy code printed to the screen, or the double-brackets wouldn't render at all.

* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.

Filters are kind of like methods, they perform some function on the variable you give it. currency, uppercase, lowercase, orderBy

* What's the syntax for filters?

{{myVariable | myFilter}}

* Can you use more than one filter?

Yes

* We'll soon see how to create custom filters. What is a use case for a custom filter?

Perhaps you want to decorate some text, so you can create a custom decoration filter to decorate the text in a specific, unique way. 

## Resources

- https://docs.angularjs.org/guide/expression
- <b id="f1">https://docs.angularjs.org/guide/filter</b> [↩](#a1)
