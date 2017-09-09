const {defineSupportCode} = require('cucumber')

defineSupportCode(function({ When }) {

  When('I multiply by {int}', function(input) {
    this.answer = this.answer * input
  })

})