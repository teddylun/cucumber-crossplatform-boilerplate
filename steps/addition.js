const {defineSupportCode} = require('cucumber')

defineSupportCode(function({ When }) {

  When('I add {int}', function(input) {
    this.answer = this.answer + input
  })

})