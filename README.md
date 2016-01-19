# Three step AngularJS form exercise

Simple three step AngularJS form that should include form validation, saving data to localStorage and unit tests. 

## Running

For running this project:
 1. install [nodejs](https://nodejs.org/en/)
 2. get grunt-cli and bower `npm install -g bower grunt-cli`
 3. get karma `npm install karma-jasmine`
 4. if(usingWindows) also get [ruby](http://rubyinstaller.org/) and check the 'Add to PATH' checkbox while installing
 5. get sass `gem install sass`
 6. get compass `gem install compass`
 7. if you haven't already, now you should pull the repository to your machine
 8. locate your project directory and run `npm install` and `bower install`
 9. last step should be `grunt serve` and you're running it

## Testing

There are only simple unit tests for RegistrationCtrl, but `grunt test` will run them with karma.

## TO-DO

 - add some kind of year datepicker on Year input
 - detect card type/format depending on the card number
 - prevent writing invalid dates in expiration date (some kind of picker)
 - remove angular-ui-mask from project
 - finish tests
 - branch off and rewrite in E6/7
