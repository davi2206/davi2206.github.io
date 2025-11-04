// Custom files
const filters = require('./eleventy-config/filters');
const passThrough = require('./eleventy-config/passThrough');
const customCollections = require('./eleventy-config/collections');
const collections = require('./eleventy-config/collections');

const futurePost = require("eleventy-plugin-future-post");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(futurePost);
    
    // Register custom JS files
    filters(eleventyConfig);
    passThrough(eleventyConfig);
    customCollections(eleventyConfig);

    // Exclude future posts
    eleventyConfig.addGlobalData("eleventyComputed.permalink", (data) => {
        if(!data) return;
        // Always output on dev (serve, watch)
        //if (process.env.BUILD_DRAFTS) return data.permalink;
        // Do not build files with a future date
        if (data.date && new Date(data.date) > new Date()) return false;
        return data.permalink;
    });


    return {
        dir: {
            input: "src",
            output: "_site",
            data: "../data"
        }
    };
};