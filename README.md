# Google Play API (unofficial) — examples
> **Note:** this is an _unofficial_ programmatic interface — an [Apify actor](https://apify.com/bovi/google-play-scraper) that returns structured JSON. It is not affiliated with the platform it reads.


Runnable examples for the **[Google Play Store Scraper — Apps, Reviews & Dev Email](https://apify.com/bovi/google-play-scraper)** on Apify.

Scrape Google Play Store app details, ratings, and reviews. Returns title, developer, installs, rating (with 1-5★ distribution), price, category, description, developer email, and up to 20 embedded reviews per app. Pay per result.

## What you get per record
see the actor's output schema on the Store page

## Who uses this
- **ASO competitor tracking** — charts positions, ratings and metadata changes for any app set.
- **Market sizing** — install bands and category dynamics for app niches.
- **App metadata enrichment** — attach Play-Store fields to your app database.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |

## Example input
```json
{
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
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/google-play-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
