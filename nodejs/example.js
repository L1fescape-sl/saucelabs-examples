const webdriver = require('selenium-webdriver')

const {
  SAUCE_USERNAME,
  SAUCE_ACCESS_KEY,
  REMOTE_ADDRESS,
} = process.env

let driver;

async function run() {
  let remoteAddress = 'https://ondemand.saucelabs.com:443/wd/hub'
  if (REMOTE_ADDRESS) {
    console.log(`Using remote address: ${REMOTE_ADDRESS}`);
    remoteAddress = REMOTE_ADDRESS;
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

  driver = await new webdriver.Builder().withCapabilities(capabilities).usingServer(remoteAddress).build()

  await driver.get('https://www.saucedemo.com')

  const title = await driver.getTitle()
  if (title === 'Swag Labs'){
      driver.executeScript('sauce:job-result=passed')
      console.log('Test Passed!')
  } else {
      driver.executeScript('sauce:job-result=failed')
      console.log('Test Failed!', 'Title did not match')
  }

  await driver.quit()
}

run().catch(function (error) {
    console.log('Test Error!', error)
    if (driver) {
        driver.executeScript('sauce:job-result=failed');
    }
})
