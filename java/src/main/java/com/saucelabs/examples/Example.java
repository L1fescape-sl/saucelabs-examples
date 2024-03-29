package com.saucelabs.examples;

import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;

class Example {
  public static void main(String[] args) throws Exception {
		String SAUCE_USERNAME = System.getenv("SAUCE_USERNAME");
		String SAUCE_ACCESS_KEY = System.getenv("SAUCE_ACCESS_KEY");
		String REMOTE_ADDRESS = System.getenv("REMOTE_ADDRESS");

		String remoteAddress = "https://ondemand.saucelabs.com/wd/hub";
		if (REMOTE_ADDRESS != null && !REMOTE_ADDRESS.isEmpty()) {
			System.out.println(String.format("Using remote address: %s", REMOTE_ADDRESS));
			remoteAddress = REMOTE_ADDRESS;
		}

		EdgeOptions browserOptions = new EdgeOptions();
		browserOptions.setCapability("platformName", "Windows 10");
		browserOptions.setCapability("browserVersion", "latest");
		MutableCapabilities sauceOptions = new MutableCapabilities();

		sauceOptions.setCapability("username", SAUCE_USERNAME);
		sauceOptions.setCapability("accessKey", SAUCE_ACCESS_KEY);
		browserOptions.setCapability("sauce:options", sauceOptions);

		ChromeOptions chromeOpts = new ChromeOptions();
		chromeOpts.setExperimentalOption("w3c", true);
		browserOptions.setCapability("goog:chromeOptions", chromeOpts);

		RemoteWebDriver driver = new RemoteWebDriver(new URL(remoteAddress), browserOptions);
		System.out.println(String.format("Session id: %s", driver.getSessionId()));

		driver.navigate().to("https://www.saucedemo.com");
		String title = driver.getTitle();
		System.out.println(String.format("Page title: %s", title));

		driver.quit();
  }
}
