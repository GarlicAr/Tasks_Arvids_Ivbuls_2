import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { writeFile } from 'fs';
import {
    BRAND_LINKS_SELECTOR,
    BRAND_SELECTOR,  FILTER_LINK_SELECTOR, MIN_SLIDER_BUTTON_SELECTOR, MODEL_HEART_SELECTOR,
    MODEL_LINKS_SELECTOR,
    MODEL_NAME_SELECTOR,
    viewPort,
    WEB_PAGE
} from "./constants/constants.js";
//import iMobileRecordsGSM from './interfaces/iMobileRecordsGSM.js'
import {MinYear} from "./utils/utilities.js";

await puppeteer.use(StealthPlugin());

(
    async () => {

            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            await page.setViewport(viewPort);

            await page.goto(WEB_PAGE);
            await page.waitForSelector(BRAND_SELECTOR);

            const brandLinks = await page.$$eval(BRAND_LINKS_SELECTOR, links => links.map(link => link.href));

            const dataRecords = [];

        for (const brandLink of brandLinks) {

            await page.goto(brandLink);
            await page.waitForSelector(MODEL_LINKS_SELECTOR);

            const modelLinks = await page.$$eval(MODEL_LINKS_SELECTOR, links => links.map(link => link.href));

            await page.click(FILTER_LINK_SELECTOR);

            await page.waitForSelector(MIN_SLIDER_BUTTON_SELECTOR);
            const sliderPosition = MinYear(2000);


            await page.evaluate((MIN_SLIDER_BUTTON_SELECTOR, sliderPosition) => {
                const sliderButton = document.querySelector(MIN_SLIDER_BUTTON_SELECTOR);
                sliderButton.style.left = sliderPosition;
            }, MIN_SLIDER_BUTTON_SELECTOR, sliderPosition);

            await page.waitForTimeout(1000);


            for (const modelLink of modelLinks) {

                await page.goto(modelLink);

                const modelData = {
                    url: modelLink,
                    model_name: MODEL_NAME_SELECTOR,
                    reviews_hearts: MODEL_HEART_SELECTOR
                };

                dataRecords.push(modelData);

                await new Promise(resolve => setTimeout(resolve, 1000));

            }
        }

        await fs.writeFile('gsm_data.json', JSON.stringify(dataRecords, null, 2));


        await browser.close();
    }
)();
