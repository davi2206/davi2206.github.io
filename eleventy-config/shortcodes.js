const site = require("../data/site.json");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("anchor", function(content, id) {
        return `<span id="${id}">${content}</span>`;
    });

    eleventyConfig.addShortcode("money", function(amount) {
        const userLocale = navigator.languages?.[0] || navigator.language || 'en-US';
        const formatter = new Intl.NumberFormat(userLocale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const formatterSmall = new Intl.NumberFormat(userLocale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        let eur = formatter.format(amount/7.5);
        let gbp = formatter.format(amount/8.6);
        let usd = formatter.format(amount/6.4);

        return `<span class="tooltip">Dkk ${formatterSmall.format(amount)},-
                    <span class="tooltip-text">
                        Approximate:<br>
                        € ${eur}<br>
                        £ ${gbp}<br>
                        $ ${usd}
                    </span>
                </span>`;
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
