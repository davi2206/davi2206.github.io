const site = require("../data/site.json");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("anchor", function(content, id) {
        return `<span id="${id}">${content}</span>`;
    });

    // Social media links
    eleventyConfig.addShortcode("twitter", function() {
        return `<a href="${site.twitter}" target="_blank">X</a>`;
    });
    eleventyConfig.addShortcode("instagram", function() {
        return `<a href="${site.instagram}" target="_blank">Instagram</a>`;
    });
    eleventyConfig.addShortcode("discord", function() {
        return `<a href="${site.discord}" target="_blank">Discord</a>`;
    });
}
