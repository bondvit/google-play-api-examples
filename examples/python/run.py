"""
google-play-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/google-play-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'appIds': ['com.spotify.music'],
    'country': 'US',
    'includeReviews': True,
    'lang': 'en',
    'proxyConfiguration': {'useApifyProxy': True, 'apifyProxyGroups': ['RESIDENTIAL']}}

run = client.actor("bovi/google-play-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
