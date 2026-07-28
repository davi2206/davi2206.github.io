

// Create Custom Collections
module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("posts", function (collectionApi) {
        let posts = collectionApi.getFilteredByGlob("src/posts/**/*.*")
                .filter(post => new Date(post.date).getTime() <= new Date().getTime());
        return posts;
    });

    eleventyConfig.addCollection("featured", function(collectionApi) {
        let posts = collectionApi.getFilteredByGlob("src/posts/**/*.*")
                .filter(post => new Date(post.date).getTime() <= new Date().getTime())
                .filter(post => post.data.featured);
        return posts;
    });


    eleventyConfig.addCollection("tagsList", function(collection) {
        let posts = collection.getAll();

        let tags = [
            "lore",
            "the_forge",
            "writing",
            "reflections",
            "challenges",
            "misc",
        ];

        posts.forEach(element => {
            if(element?.data?.tags && element.date <= new Date() && !element.data.tags.includes("exclude")) {
                tags.push(element.data.tags[0]);
            }
        });
        let uniqueue =  [...new Set(tags)];
        return uniqueue;
    });
};