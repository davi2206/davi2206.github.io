
module.exports = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate(); // 1-31 Apparently months are 0-indexed, but dates are not..

  var season = 'default';
  var bgImage = '/assets/images/bg.jpg';
  var overlayDeg = '0deg';
  var overlayColor1 = 'rgba(0, 0, 0, 0.1)';
  var overlayColor2 = 'rgba(0, 0, 0, 0.1)';
  var postFontFamily = 'Inter Variable, Inter, -apple-system, BlinkMacSystemFont, sans-serif';
  var postFontSize = '1em';

  // Early January - New Year
  if (month == 1 && day < 10) {
    season = 'new_year';
    bgImage = '/assets/images/bg_newyear.png';
    overlayColor1 = 'rgba(0, 0, 0, 0.2)';
  }

  // October - Full Moon and Halloween
  if (month == 10) {
    season = 'halloween';
    overlayColor1 = 'rgba(0, 0, 0, 0)';
    overlayColor2 = 'rgba(0, 0, 0, 0)';
    
    if(day > 25) {
      bgImage = '/assets/images/bg_halloween.png';
    }
    else {
      bgImage = '/assets/images/bg_fullmoon.png';
    }
  }
  
  // December - Christmas and New Year
  if (month == 12) {
    overlayColor1 = 'rgba(0, 0, 0, 0.5)';
    overlayColor2 = 'rgba(0, 0, 0, 0.1)';

    if (day < 27) {
      season = 'christmas';
      bgImage = '/assets/images/bg_christmas.png';
    }
    else {
      season = 'new_year';
      bgImage = '/assets/images/bg_newyear.png';
    }
  }

  // Rest of the year
  return {
    season: season,
    bgImage: bgImage,
    overlayDeg: overlayDeg,
    overlayColor1: overlayColor1,
    overlayColor2: overlayColor2,
    postFontFamily: postFontFamily,
    postFontSize: postFontSize
  };
};