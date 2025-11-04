

// Create Custom Collections
module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("posts", function (collectionApi) {
        let posts = collectionApi.getFilteredByGlob("src/posts/**/*.*")
                .filter(post => new Date(post.date).getTime() <= new Date().getTime());
//            .filter(post => post.date <= new Date());
        return posts;
    });


    eleventyConfig.addCollection("tagsList", function(collection) {
        let posts = collection.getAll();

        let tags = [];

        posts.forEach(element => {
            if(element?.data?.tags && element.date <= new Date()) {
                tags.push(element.data.tags[0]);
            }
        });
        let uniqueue =  [...new Set(tags)];
        return uniqueue;
    });
};