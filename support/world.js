const {defineSupportCode} = require('cucumber')
const {Builder, By, until} = require('selenium-webdriver')
const platform = process.env.PLATFORM || 'CHROME'

var buildAndroidDriver = function() {
  return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      deviceName: 'Android device',
      browserName: 'Chrome',
      deviceReadyTimeout: '60',
      appWaitDuration: '60000'
    }).
    build();
}

var buildIosDriver = function() {
  return new Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      browserName: 'safari',
      platformName: "iOS",
      platformVersion: "10.3",
      deviceName: "iPhone Simulator"
      // app: "/Users/darkcl/Documents/Workspace/Mastodon-iOS/Build/Products/Debug-iphonesimulator/Mastodon-iOS.app", 
      // automationName: "XCUITest"
    }).
    build();
}

var buildChromeDriver = function() {
  return new Builder().forBrowser("chrome").build();
}

var buildDriver = function() {
  switch(platform) {
    case 'ANDROID':
      return buildAndroidDriver();
    case 'IOS':
      return buildIosDriver();
    case 'CHROME':
      return buildChromeDriver();
    default:
      return buildChromeDriver();
  }
}

defineSupportCode(function({ setDefaultTimeout }) {
  setDefaultTimeout(60 * 1000)
})

function customWorld({ attach, parameter }) {
  this.attach = attach
  this.parameter = parameter 
  this.platform = platform
  console.log(this)
}

defineSupportCode(function({setWorldConstructor}) {
  console.log('setWorldConstructor')
  setWorldConstructor(customWorld)
})