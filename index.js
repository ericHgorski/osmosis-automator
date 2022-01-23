const puppeteer = require('puppeteer')

const LATENCY = 100 // adjust for internet speed (50-1000)

(async () => {
  console.log('go');
  const browser = await puppeteer.launch({ headless: false })
  console.log('go');
  const page = await browser.newPage()
  console.log('go');
  await page.goto('https://example.com')
})()