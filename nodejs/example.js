const webdriver = require('selenium-webdriver')

const { SAUCE_USERNAME, SAUCE_ACCESS_KEY, REMOTE_ADDRESS } = process.env

let remoteAddress = 'https://ondemand.saucelabs.com:443/wd/hub'
if (REMOTE_ADDRESS) {
  remoteAddress = REMOTE_ADDRESS
  console.log(`Using remote address: ${remoteAddress}`)
}

const sauceOptions = {
  username: SAUCE_USERNAME,
  accessKey: SAUCE_ACCESS_KEY,
}

const capabilities = {
  browserName: 'microsoftedge',
  platformName: 'Windows 10',
  versionName: '78',
  'sauce:options': sauceOptions,
}

async function run() {
  const driver = await new webdriver.Builder().withCapabilities(capabilities).usingServer(remoteAddress).build()

  await driver.get('https://www.saucedemo.com')
  console.log(`Session id: ${driver.sessionId}`)

  const title = await driver.getTitle()
  console.log(title)

  await driver.quit()
}

run().catch(function (error) {
  console.log('Test Error!', error)
})
