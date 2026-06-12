/**
 * google-play-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/google-play-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
    "appIds": [
        "com.spotify.music"
    ],
    "country": "US",
    "includeReviews": true,
    "lang": "en",
    "proxyConfiguration": {
        "useApifyProxy": true,
        "apifyProxyGroups": [
            "RESIDENTIAL"
        ]
    }
};

const run = await client.actor('bovi/google-play-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
