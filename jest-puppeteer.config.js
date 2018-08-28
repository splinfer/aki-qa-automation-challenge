module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    args: ['--window-size=1024,768']
  }
}