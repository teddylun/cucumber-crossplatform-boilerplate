const {defineSupportCode} = require('cucumber')
const {expect} = require('chai')

defineSupportCode(function({ Then }) {
  Then('I end up with {int}', function(input) {
    expect(this.answer).to.equal(input)
  })
})