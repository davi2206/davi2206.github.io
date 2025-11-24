const { DateTime } = require("luxon");

// Add Filters
module.exports = function (eleventyConfig) {
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

    eleventyConfig.addFilter("random", (collection) => {
        let rand = Math.floor(Math.random() * collection.length);
        const randomElement = collection[rand];
        return randomElement;
    });

    eleventyConfig.addFilter("pretty", (value) => {
        return value.replace('_', ' ');
    });

    eleventyConfig.addFilter("capital", value => {
        return String(value).charAt(0).toUpperCase() + String(value).slice(1);
    });
};