//  Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('AgeSuite', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('UnderageCola', async function() {
        // Test name: UnderageCola
        // Step # | name | target | value
        // 1 | open | / |
        await driver.get("http://localhost:3000/")
        // 2 | click | css=.ng-scope:nth-child(1) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()
        // 3 | assertText | css=tr:nth-child(4) > .ng-binding | €1.25
        // 1x RobaCola = €1.25
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€1.25")
        // 4 | click | css=.ng-scope:nth-child(1) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()
        // 5 | assertText | css=tr:nth-child(4) > .ng-binding | €2.50
        // 2x RobaCola = €2.50
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€2.50")
        // 6 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 7 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 8 | assertText | css=p | Coming right up! ~bzzzt~
        assert(await driver.findElement(By.css("p")).getText() == "Coming right up! ~bzzzt~")
    })
    it('UnderageBeer', async function() {
        // Test name: UnderageBeer
        // Step # | name | target | value
        // 1 | open | / |
        await driver.get("http://localhost:3000/")
        // 2 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
        // 3 | assertText | css=tr:nth-child(4) > .ng-binding | €2.00
        // 1x RoboBeer = €2.00
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€2.00")
        // 4 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
        // 5 | assertText | css=tr:nth-child(4) > .ng-binding | €4.00
        // 2x RoboBeer = €4.00
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€4.00")
        // 6 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 7 | mouseOver | css=.btn-success |
//    {
//    const element = await driver.findElement(By.css(".btn-success"))
//    await driver.actions({ bridge: true }).moveToElement(element).perform()
//    }
        // 8 | click | id=ageInput |
        await driver.findElement(By.id("ageInput")).click()
        // 9 | type | id=ageInput | 17
        await driver.findElement(By.id("ageInput")).sendKeys("17")
        // 10 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 11 | assertElementPresent | css=.alert-danger |
        {
            const elements = await driver.findElements(By.css(".alert-danger"))
            assert(elements.length)
        }
    })
    it('AdultBeer', async function() {
        // Test name: AdultBeer
        // Step # | name | target | value
        // 1 | open | / |
        await driver.get("http://localhost:3000/")
        // 2 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
        // 3 | assertText | css=tr:nth-child(4) > .ng-binding | €2.00
        // 1x RoboBeer = €2.00
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€2.00")
        // 4 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn |
        await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
        // 5 | assertText | css=tr:nth-child(4) > .ng-binding | €4.00
        // 2x RoboBeer = €4.00
        assert(await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getText() == "€4.00")
        // 6 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 7 | mouseOver | css=.btn-success |
// {
//     const element = await driver.findElement(By.css(".btn-success"))
//   await driver.actions({ bridge: true }).moveToElement(element).perform()
// }
        // 8 | click | id=ageInput |
        await driver.findElement(By.id("ageInput")).click()
        // 9 | type | id=ageInput | 19
        await driver.findElement(By.id("ageInput")).sendKeys("19")
        // 10 | click | css=.btn-success |
        await driver.findElement(By.css(".btn-success")).click()
        // 11 | assertText | css=p | Coming right up! ~bzzzt~
        assert(await driver.findElement(By.css("p")).getText() == "Coming right up! ~bzzzt~")
    })
})