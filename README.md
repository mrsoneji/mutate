# mutate-map

A Javascript Map function helper.

Usage:

```{
    const mutate = require('mutate-map')
    const tweets = mutate(tweetsResponse.statuses, { tweet_id: 'id', text: 'text', author: 'user.screen_name', hashtags: 'entities.hashtags.text', user_mentions: 'entities.user_mentions.screen_name' })
}
```

Above example will mutate this Twitter API's response from this...

```{
  "statuses": [
    {
      "created_at": "Sun Feb 25 03:24:54 +0000 2018",
      "id": 967601268087754800,
      "id_str": "967601268087754752",
      "text": "I'm a non-coder working with what I hope is JavaScript (within Wix) and I need help with a smal... https://t.co/66WGq0bqOz",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/66WGq0bqOz",
            "expanded_url": "https://goo.gl/E1onpd",
            "display_url": "goo.gl/E1onpd",
            "indices": [
              99,
              122
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://www.wonderland.fm/\" rel=\"nofollow\">wonderland.fm</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1144874388,
        "id_str": "1144874388",
        "name": "Ajax Tips",
        "screen_name": "AjaxTips",
        "location": "",
        "description": "Ajax (async JavaScript) learning tips and tricks.",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 4860,
        "friends_count": 4385,
        "listed_count": 218,
        "created_at": "Sun Feb 03 11:08:59 +0000 2013",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 23353,
        "lang": "es",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "401547",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3201468625/21156b53c6ccfbbcbfbb2ad2d122c76b_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3201468625/21156b53c6ccfbbcbfbb2ad2d122c76b_normal.png",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": false,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    }
]
```

Into this:

 ```{
    "tweet_id": 967601268087754800,
    "text": "I'm a non-coder working with what I hope is JavaScript (within Wix) and I need help with a smal... https://t.co/66WGq0bqOz",
    "author": "AjaxTips"
 }
 ```
