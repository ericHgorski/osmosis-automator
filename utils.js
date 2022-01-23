const { POOL_CARD, POOL_NUM, TOS_MODAL } = require('./selectors')

const selectPool = async (poolNum, page) => {
  await page.evaluate((POOL_CARD) => {
    const pools = document.querySelectorAll(POOL_CARD)
    console.log('pools', pools);
    [...pools].map((pool) => {console.log(pool)})
  }, POOL_CARD )
}

const acceptTOS = async (page) => {
  await page.evaluate((TOS_MODAL) => {
    const modal = document.querySelector(TOS_MODAL)
    if (!modal) { return }
    modal.querySelector('input').click()
    modal.querySelector('button').click()
  }, TOS_MODAL)
}

module.exports = { 
  selectPool,
  acceptTOS 
}

