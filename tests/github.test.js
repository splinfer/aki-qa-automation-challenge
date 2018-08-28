const timeout = 10 * 1000

describe('Github.com', () => {
  it('load without error', async () => {
    await page.goto('https://github.com')
    const text = await page.evaluate(() => document.body.textContent)
    expect(text).toContain('GitHub')
  }, timeout)
})
