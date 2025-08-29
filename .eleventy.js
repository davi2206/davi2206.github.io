const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Add PassThroughs
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
    
    // Add Filters
    eleventyConfig.addFilter("truncate", function (str, len) {
        if (!str) return "";
        if (str.length <= len) return str;
        return str.substr(0, len) + "...";
    });

    eleventyConfig.addFilter("format_date", (dateObj) => {
        // Convert JS Date or ISO string to Luxon DateTime
        const dt = DateTime.fromJSDate(dateObj instanceof Date ? dateObj : new Date(dateObj), { locale: 'en' });
        // Format "dd. MMM. yyyy" like "25. Aug. 2025"
        return dt.toFormat("dd. LLL. yyyy");
    });

    eleventyConfig.addFilter("where", (collection, key, value) => {
        return collection.filter(item => item.data[key] === value);
    });

    eleventyConfig.addFilter("limit", (collection, count) => {
        return collection.slice(0, count);
    });


    // Create Custom Collections
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/posts/**/*.njk");
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            data: "../data"
        }
    };
};