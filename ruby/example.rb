require "selenium-webdriver"

username = ENV['SAUCE_USERNAME']
accessKey = ENV['SAUCE_ACCESS_KEY']
remoteAddress = 'https://ondemand.saucelabs.com:443/wd/hub'

sauceOptions = {
  username: username,
  accessKey: accessKey
}

caps = {
  browser_name: 'MicrosoftEdge',
  browser_version: 'latest',
  platform_name: 'Windows 10',
  'sauce:options': sauceOptions,
}

if ENV['REMOTE_ADDRESS']
  remoteAddress = ENV['REMOTE_ADDRESS']
  puts "Using remote address: #{remoteAddress}"
end

driver = Selenium::WebDriver.for(:remote, :url => remoteAddress, :desired_capabilities => caps)
puts "Session id: #{driver.session_id}"

driver.navigate.to("https://www.saucedemo.com")
title = driver.title
puts title

driver.quit
