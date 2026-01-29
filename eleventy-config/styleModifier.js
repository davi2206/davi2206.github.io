
module.exports = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate(); // 1-31 Apparently months are 0-indexed, but dates are not..

  // Early January
  if (month == 1 && day < 10) {
    return {
      season: 'new_year',
      bgImage: '/images/bg_newyear.png',
      overlayDeg: '0deg',
      overlayColor1: 'rgba(0, 0, 0, 0.2)',
      overlayColor2: 'rgba(0, 0, 0, 0.1)'
    };
  }

  // Late October
  if (month == 10 && day > 25) {
    return {
      season: 'halloween',
      bgImage: '/images/bg_halloween.png',
      overlayDeg: '0deg',
      overlayColor1: 'rgba(0, 0, 0, 0)',
      overlayColor2: 'rgba(0, 0, 0, 0)'
    };
  }

  // October
  if (month == 10) {
    return {
      season: 'halloween',
      bgImage: '/images/bg_fullmoon.png',
      overlayDeg: '0deg',
      overlayColor1: 'rgba(0, 0, 0, 0)',
      overlayColor2: 'rgba(0, 0, 0, 0)'
    };
  }

  // December
  if (month == 12 && day < 28) {
    return {
      season: 'christmas',
      bgImage: '/images/bg_christmas.png',
      overlayDeg: '0deg',
      overlayColor1: 'rgba(0, 0, 0, 0.5)',
      overlayColor2: 'rgba(0, 0, 0, 0.1)'
    };
  }

  // End of December
  if (month == 12 && day >= 28) {
    return {
      season: 'new_year',
      bgImage: '/images/bg_newyear.png',
      overlayDeg: '0deg',
      overlayColor1: 'rgba(0, 0, 0, 0.5)',
      overlayColor2: 'rgba(0, 0, 0, 0.1)'
    };
  }

  // Rest of the year
  return {
    season: 'default',
    bgImage: '/images/bg.jpg',
    overlayDeg: '0deg',
    overlayColor1: 'rgba(0, 0, 0, 0.1)',
    overlayColor2: 'rgba(0, 0, 0, 0.1)'
  };
};
