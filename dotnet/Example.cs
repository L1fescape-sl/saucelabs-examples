using System;
using System.Collections.Generic;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Chrome;

namespace SauceLabsExamples
{
  public class Example
  {
    static public void Main(string[] args) {
      var SAUCE_USERNAME = Environment.GetEnvironmentVariable("SAUCE_USERNAME");
      var SAUCE_ACCESS_KEY = Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY");
      var REMOTE_ADDRESS = Environment.GetEnvironmentVariable("REMOTE_ADDRESS");

      var sauceURL = new Uri("https://ondemand.saucelabs.com/wd/hub");
      if (!String.IsNullOrEmpty(REMOTE_ADDRESS)) {
        sauceURL = new Uri(REMOTE_ADDRESS);
        Console.WriteLine($"Using remote address: {sauceURL}");
      }

      var sauceOptions = new Dictionary<string, object>{
        ["username"] = SAUCE_USERNAME,
        ["accessKey"] = SAUCE_ACCESS_KEY,
      };
      var options = new EdgeOptions{
        BrowserVersion = "latest",
        PlatformName = "Windows 10",
      };
      options.AddAdditionalCapability("sauce:options", sauceOptions);

      var driver = new RemoteWebDriver(sauceURL, options.ToCapabilities(), TimeSpan.FromSeconds(600));
      Console.WriteLine($"Session id: {driver.SessionId}");

      driver.Navigate().GoToUrl("https://www.saucedemo.com");
      var title = driver.Title;
      Console.WriteLine($"Page title: {title}");

      driver.Quit();
    }
  }
}
