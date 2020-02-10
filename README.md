# Sitemap for @gitbook-ng/gitbook

A sitemap plugin for [@gitbook-ng/gitbook](https://www.npmjs.com/package/@gitbook-ng/gitbook).

Generate a sitemap for the gitbook website. The output sitemap file is `sitemap.xml`.

Add it to your `book.json` with a basic configuration:

```js
{
    "plugins": ["sitemap"],
    "pluginsConfig": {
        "sitemap": {
            "hostname": "https://example.com",
            "pathPrefix": "/mybook/"
        }
    }
}
```

## Install

It is part of [**@gitbook-ng/gitbook**](https://github.com/gitbook-ng/gitbook),
you donot need install it separately.

## Config

### hostname

Root domain of URL, must not include URL path.

e.g. `https://example.com`

### pathPrefix

Path prefix for sitemap link.
If you do not want to host your book on the root (/) of your site,
for example, you want to host your book on `https://example.com/books/book1/`,
you can use following config:

```js
{
    "plugins": ["sitemap"],
    "pluginsConfig": {
        "sitemap": {
            "hostname": "https://example.com",
            "pathPrefix": "/books/book1/"
        }
    }
}
```
