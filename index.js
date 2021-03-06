var fs = require('fs');
var path = require('path');
var url = require('url');
var sm = require('sitemap');

var urls = [];

module.exports = {
    hooks: {
        // Index page
        "page": function(page) {
            if (this.output.name != 'website') return page;

            var lang = this.isLanguageBook()? this.language : '';
            if (lang) lang = lang + '/';

            var pathPrefix = this.config.get('pluginsConfig.sitemap.pathPrefix', '');

            var url = this.output.toURL(pathPrefix + lang + page.path);
            if (url.startsWith('./')) url = '';  // To avoid https://example.com/./ in sitemap

            urls.push({ url });

            return page;
        },

        // Write sitemap.xml
        "finish": function() {
            var sitemap = sm.createSitemap({
                cacheTime: 600000,
                hostname: url.resolve(this.config.get('pluginsConfig.sitemap.hostname'), '/'),
                urls: urls
            });

            var xml = sitemap.toString();

            return this.output.writeFile('sitemap.xml', xml);
        }
    }
};
