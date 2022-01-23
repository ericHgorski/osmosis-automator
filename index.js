const puppeteer = require('puppeteer');
const { selectPool, acceptTOS } = require('./utils');
const { OSMOSIS_POOL_URL } = require('./constants');

const start = async () => {
  const browser = await puppeteer.launch({ headless: false, executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" })
  const page = await browser.newPage()
  await page.goto(OSMOSIS_POOL_URL, { waitUntil: 'networkidle2' })
  await acceptTOS(page)
  await selectPool('1', page)
}

start()