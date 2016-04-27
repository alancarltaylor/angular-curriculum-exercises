## Questions

* What does `ng-model` do?
Binds an input to a property on the scope.
* [What is "dirty checking"?](http://stackoverflow.com/questions/24698620/dirty-checking-on-angular)

monitering if any input field is dirty

* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).

ng-init="name='BoJack'"

* What are those `{{ }}` expressions? Are they Handlebars?

They are not handlebars, they are used with Angular, and can be subsituted with ng-bind=myVar

* Explain what two-way data binding is.
 if data changes in the view, it is immediately updated in the model, and vice versa

* BONUS: Research the `$digest` loop

## Resources

* [Data Binding Reference](https://docs.angularjs.org/guide/databinding)
* [ng-model Docs](https://docs.angularjs.org/api/ng/directive/ngModel)
* [`$watch`](https://www.ng-book.com/p/The-Digest-Loop-and-apply/)
* [ng-cloak StackOverflow discussion](http://stackoverflow.com/questions/12866447/prevent-double-curly-brace-notation-from-displaying-momentarily-before-angular-j)
