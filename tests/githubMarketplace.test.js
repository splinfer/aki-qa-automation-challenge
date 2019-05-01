const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({toMatchImageSnapshot});

describe('Marketplace tests', () => {
    // Define properties constants
    const width = 1024;
    const height = 768;
    const URL = 'https://github.com';
    const timeout = 15000;
    let browser;

    // Define element constants
    const MARKETPLACE_LINK = '[href*="marketplace"]';
    const MARKETPLACE_SEARCH_BAR = '[type="text"][name="query"]';

    // Launc a new instance of the browser overiding the settings
    beforeAll( async () =>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            args: [`--${width},${height}`]
        });
    })
    
    //Perform the test
    it('Should match snapshots from marketplace', async () => {
        // Launch a new page for the browser
        const page = await browser.newPage();
        // Set viewport to window size
        await page.setViewport({width: 1024,height:768});
        await page.goto(URL, {waitUntil: 'domcontentloaded'});
        await page.click(MARKETPLACE_LINK);
        await page.type(MARKETPLACE_SEARCH_BAR,'test\n');
        // Take image screenshot of the full results page to compare the snapshot
        const image = await page.screenshot({fullPage: true});
        expect(image).toMatchImageSnapshot({
            failureThreshold: '0.01',
            failureThresholdType: 'percent',
            customSnapshotIdentifier: 'github_marketplace_snap'
        });
    }, timeout);

    // Close browser after execution of test
    afterAll( async () => {
        await browser.close();
    });
});