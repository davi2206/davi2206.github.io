const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addAsyncShortcode("image", async function (
                        src, alt, widths = [400, 800, 1200], sizes = "100vw") {
        if (!alt) {
            throw new Error(`Missing alt text for image: ${src}`);
        }
        
        let metadata = await Image(src, {
            widths,
            formats: ["webp", "jpeg"],
            urlPath: "/img/",
            outputDir: "./_site/img/",
        });
        
        return Image.generateHTML(metadata, {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        });
    });
}
