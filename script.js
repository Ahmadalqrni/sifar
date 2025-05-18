// Remove the hardcoded cities array and load it dynamically
let cities = [];

// Sample hotels and guides data
const hotelsData = {
  "جدة": [
    { name: "فندق جدة هيلتون", rating: 4.7, url: "https://www3.hilton.com/en/hotels/saudi-arabia/jeddah-hilton-hotel-JEDHITW/index.html", address: "طريق الكورنيش، جدة", phone: "0126590000", desc: "فندق فاخر مطل على البحر الأحمر مع مرافق راقية." },
    { name: "فندق راديسون بلو", rating: 4.5, url: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-jeddah", address: "طريق المدينة، جدة", phone: "0126521234", desc: "فندق عصري في قلب جدة مع خدمات ممتازة." }
  ],
  "مكة المكرمة": [
    { name: "فندق ساعة مكة فيرمونت", rating: 4.8, url: "https://www.fairmont.com/makkah/", address: "وقف الملك عبدالعزيز، مكة", phone: "0125717777", desc: "فندق فاخر بجوار الحرم المكي الشريف." },
    { name: "فندق أبراج البيت", rating: 4.6, url: "https://www.alfajrhotels.com/", address: "شارع أجياد، مكة", phone: "0125779999", desc: "إقامة مريحة وخدمات مميزة للحجاج والمعتمرين." }
  ],
  "الرياض": [
    { name: "فندق الريتز كارلتون", rating: 4.9, url: "https://www.ritzcarlton.com/en/hotels/saudi-arabia/riyadh", address: "طريق مكة، الرياض", phone: "0118028028", desc: "فندق خمس نجوم في قلب العاصمة." },
    { name: "فندق فورسيزونز الرياض", rating: 4.7, url: "https://www.fourseasons.com/riyadh/", address: "برج المملكة، الرياض", phone: "0112115000", desc: "إطلالة رائعة وخدمات فاخرة في برج المملكة." }
  ],
  "الخبر": [
    { name: "فندق المريديان الخبر", rating: 4.6, url: "https://www.marriott.com/en-us/hotels/dhalk-le-meridien-al-khobar/overview/", address: "شارع الكورنيش، الخبر", phone: "0138969000", desc: "موقع مميز على الكورنيش وخدمات راقية." },
    { name: "فندق سوفيتل الخبر الكورنيش", rating: 4.5, url: "https://all.accor.com/hotel/6808/index.en.shtml", address: "طريق الكورنيش، الخبر", phone: "0138811111", desc: "فندق أنيق مع إطلالة بحرية رائعة." }
  ],
  "العلا": [
    { name: "فندق شادن العلا", rating: 4.8, url: "https://shadenresort.com/", address: "العلا الجديدة، العلا", phone: "0148840000", desc: "منتجع فاخر وسط الطبيعة الخلابة." },
    { name: "منتجع العلا الصحراوي", rating: 4.7, url: "https://www.booking.com/hotel/sa/alula-desert-resort.html", address: "طريق العلا الصحراوي", phone: "0148855555", desc: "تجربة إقامة فريدة في الصحراء." }
  ],
  "الدمام": [
    { name: "فندق شيراتون الدمام", rating: 4.6, url: "https://www.marriott.com/hotels/travel/dmmdx-sheraton-dammam-hotel-and-convention-center/", address: "طريق الملك فهد، الدمام", phone: "0138345555", desc: "فندق فاخر مع مركز مؤتمرات متكامل." },
    { name: "فندق نوفوتيل الدمام", rating: 4.5, url: "https://all.accor.com/hotel/6809/index.en.shtml", address: "طريق الملك عبدالله، الدمام", phone: "0138340000", desc: "فندق عصري مع خدمات مميزة." }
  ],
  "الطائف": [
    { name: "فندق إنتركونتيننتال الطائف", rating: 4.7, url: "https://www.ihg.com/intercontinental/hotels/us/en/taif/tifha/hoteldetail", address: "طريق الملك فيصل، الطائف", phone: "0127320000", desc: "فندق فاخر في قلب الطائف." },
    { name: "فندق هوليدي إن الطائف", rating: 4.5, url: "https://www.ihg.com/holidayinn/hotels/us/en/taif/tifhi/hoteldetail", address: "طريق الملك خالد، الطائف", phone: "0127321111", desc: "إقامة مريحة مع خدمات ممتازة." }
  ],
  "أبها": [
    { name: "فندق قصر أبها", rating: 4.8, url: "https://www.ihg.com/crowneplaza/hotels/us/en/abha/ahahc/hoteldetail", address: "طريق الملك عبدالله، أبها", phone: "0172277777", desc: "فندق فاخر مع إطلالة على جبال عسير." },
    { name: "فندق هيلتون جاردن إن أبها", rating: 4.6, url: "https://www.hilton.com/en/hotels/ahahigi-hilton-garden-inn-abha/", address: "طريق الملك فهد، أبها", phone: "0172270000", desc: "فندق عصري مع خدمات راقية." }
  ],
  "ينبع": [
    { name: "فندق موفنبيك ينبع", rating: 4.7, url: "https://www.movenpick.com/en/middle-east/saudi-arabia/yanbu/", address: "طريق الكورنيش، ينبع", phone: "0143220000", desc: "فندق فاخر مطل على البحر الأحمر." },
    { name: "فندق راديسون بلو ينبع", rating: 4.5, url: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-yanbu", address: "طريق الملك فهد، ينبع", phone: "0143221111", desc: "فندق أنيق مع خدمات مميزة." }
  ],
  "تبوك": [
    { name: "فندق هيلتون جاردن إن تبوك", rating: 4.6, url: "https://www.hilton.com/en/hotels/tuuhtgi-hilton-garden-inn-tabuk/", address: "طريق الملك خالد، تبوك", phone: "0144220000", desc: "فندق عصري مع خدمات راقية." },
    { name: "فندق نوفوتيل تبوك", rating: 4.5, url: "https://all.accor.com/hotel/6810/index.en.shtml", address: "طريق الملك فهد، تبوك", phone: "0144221111", desc: "إقامة مريحة مع خدمات ممتازة." }
  ],
  "حائل": [
    { name: "فندق هيلتون جاردن إن حائل", rating: 4.7, url: "https://www.hilton.com/en/hotels/hashtgi-hilton-garden-inn-hail/", address: "طريق الملك عبدالله، حائل", phone: "0165320000", desc: "فندق فاخر في قلب حائل." },
    { name: "فندق موفنبيك حائل", rating: 4.6, url: "https://www.movenpick.com/en/middle-east/saudi-arabia/hail/", address: "طريق الملك فهد، حائل", phone: "0165321111", desc: "فندق أنيق مع خدمات مميزة." }
  ],
  "نجران": [
    { name: "فندق هيلتون جاردن إن نجران", rating: 4.6, url: "https://www.hilton.com/en/hotels/elhtgi-hilton-garden-inn-najran/", address: "طريق الملك عبدالله، نجران", phone: "0175220000", desc: "فندق عصري مع خدمات راقية." },
    { name: "فندق نوفوتيل نجران", rating: 4.5, url: "https://all.accor.com/hotel/6811/index.en.shtml", address: "طريق الملك فهد، نجران", phone: "0175221111", desc: "إقامة مريحة مع خدمات مميزة." }
  ],
  "جازان": [
    { name: "فندق هيلتون جاردن إن جازان", rating: 4.7, url: "https://www.hilton.com/en/hotels/jzntgi-hilton-garden-inn-jazan/", address: "طريق الملك عبدالله، جازان", phone: "0173220000", desc: "فندق فاخر في قلب جازان." },
    { name: "فندق موفنبيك جازان", rating: 4.6, url: "https://www.movenpick.com/en/middle-east/saudi-arabia/jazan/", address: "طريق الملك فهد، جازان", phone: "0173221111", desc: "فندق أنيق مع خدمات مميزة." }
  ],
  "الباحة": [
    { name: "فندق هيلتون جاردن إن الباحة", rating: 4.8, url: "https://www.hilton.com/en/hotels/bahtgi-hilton-garden-inn-al-baha/", address: "طريق الملك عبدالله، الباحة", phone: "0177270000", desc: "فندق فاخر مع إطلالة على جبال الباحة." },
    { name: "فندق نوفوتيل الباحة", rating: 4.7, url: "https://all.accor.com/hotel/6812/index.en.shtml", address: "طريق الملك فهد، الباحة", phone: "0177271111", desc: "إقامة مريحة مع خدمات مميزة." }
  ],
  "عرعر": [
    { name: "فندق هيلتون جاردن إن عرعر", rating: 4.6, url: "https://www.hilton.com/en/hotels/arhtgi-hilton-garden-inn-arar/", address: "طريق الملك عبدالله، عرعر", phone: "0166220000", desc: "فندق عصري مع خدمات راقية." },
    { name: "فندق موفنبيك عرعر", rating: 4.5, url: "https://www.movenpick.com/en/middle-east/saudi-arabia/arar/", address: "طريق الملك فهد، عرعر", phone: "0166221111", desc: "فندق أنيق مع خدمات مميزة." }
  ]
};

const guidesData = {
  "جدة": [
    { name: "أحمد السلمي", rating: 4.9, phone: "0551234567", desc: "مرشد سياحي خبير في معالم جدة التاريخية." },
    { name: "سارة باوزير", rating: 4.8, phone: "0559876543", desc: "متخصصة في الجولات الثقافية والفنية." }
  ],
  "مكة المكرمة": [
    { name: "محمد القرني", rating: 4.9, phone: "0551112222", desc: "خبرة واسعة في الإرشاد الديني والتاريخي." },
    { name: "خالد الحربي", rating: 4.7, phone: "0553334444", desc: "جولات مميزة للحجاج والمعتمرين." }
  ],
  "الرياض": [
    { name: "نورة العتيبي", rating: 4.8, phone: "0555556666", desc: "مرشدة سياحية متخصصة في معالم الرياض الحديثة." },
    { name: "عبدالله الدوسري", rating: 4.7, phone: "0557778888", desc: "جولات تاريخية وثقافية في العاصمة." }
  ],
  "الخبر": [
    { name: "ليلى الشمري", rating: 4.8, phone: "0559990000", desc: "جولات بحرية وثقافية في الخبر والمنطقة الشرقية." },
    { name: "سلمان التركي", rating: 4.6, phone: "0552223333", desc: "مرشد سياحي بخبرة واسعة في المنطقة." }
  ],
  "العلا": [
    { name: "سلمان العلاوي", rating: 4.9, phone: "0554445555", desc: "متخصص في جولات العلا الأثرية والطبيعية." },
    { name: "ريم المطيري", rating: 4.8, phone: "0556667777", desc: "جولات مميزة في المواقع التاريخية والطبيعية." }
  ],
  "الدمام": [
    { name: "عبدالله الشمري", rating: 4.7, phone: "0558889999", desc: "خبير في معالم الدمام الحديثة والتاريخية." },
    { name: "نورة الخالدي", rating: 4.6, phone: "0550001111", desc: "متخصصة في الجولات الثقافية والتسوق." }
  ],
  "الطائف": [
    { name: "محمد الطائفي", rating: 4.8, phone: "0552223333", desc: "خبير في معالم الطائف التاريخية والطبيعية." },
    { name: "سارة العتيبي", rating: 4.7, phone: "0554445555", desc: "متخصصة في جولات الورود والمنتزهات." }
  ],
  "أبها": [
    { name: "عبدالله العسيري", rating: 4.9, phone: "0556667777", desc: "خبير في معالم أبها الطبيعية والثقافية." },
    { name: "نورة الشهري", rating: 4.8, phone: "0558889999", desc: "متخصصة في جولات القرى التراثية." }
  ],
  "ينبع": [
    { name: "سلمان الينبعاوي", rating: 4.7, phone: "0550001111", desc: "خبير في معالم ينبع البحرية والتاريخية." },
    { name: "ليلى الحازمي", rating: 4.6, phone: "0552223333", desc: "متخصصة في الجولات البحرية والترفيهية." }
  ],
  "تبوك": [
    { name: "محمد التبوكي", rating: 4.8, phone: "0554445555", desc: "خبير في معالم تبوك التاريخية والطبيعية." },
    { name: "سارة الحربي", rating: 4.7, phone: "0556667777", desc: "متخصصة في جولات المواقع الأثرية." }
  ],
  "حائل": [
    { name: "عبدالله الحائلي", rating: 4.9, phone: "0558889999", desc: "خبير في معالم حائل التاريخية والثقافية." },
    { name: "نورة الشمري", rating: 4.8, phone: "0550001111", desc: "متخصصة في جولات القرى التراثية." }
  ],
  "نجران": [
    { name: "سلمان النجراني", rating: 4.7, phone: "0552223333", desc: "خبير في معالم نجران التاريخية والثقافية." },
    { name: "ليلى اليامي", rating: 4.6, phone: "0554445555", desc: "متخصصة في جولات القرى التراثية." }
  ],
  "جازان": [
    { name: "محمد الجازاني", rating: 4.8, phone: "0556667777", desc: "خبير في معالم جازان الطبيعية والثقافية." },
    { name: "سارة المالكي", rating: 4.7, phone: "0558889999", desc: "متخصصة في جولات الجزر والشواطئ." }
  ],
  "الباحة": [
    { name: "عبدالله الباحي", rating: 4.9, phone: "0550001111", desc: "خبير في معالم الباحة الطبيعية والثقافية." },
    { name: "نورة الغامدي", rating: 4.8, phone: "0552223333", desc: "متخصصة في جولات المنتزهات والغابات." }
  ],
  "عرعر": [
    { name: "سلمان العراري", rating: 4.7, phone: "0554445555", desc: "خبير في معالم عرعر التاريخية والثقافية." },
    { name: "ليلى الشمري", rating: 4.6, phone: "0556667777", desc: "متخصصة في جولات المواقع التراثية." }
  ]
};

// Add tourism types data
const tourismTypes = {
  "جدة": {
    types: ["سياحة بحرية", "سياحة تراثية", "سياحة تسوق"],
    description: "تتميز جدة بتنوع سياحي فريد، حيث تجمع بين السياحة البحرية على شواطئ البحر الأحمر، والسياحة التراثية في منطقة البلد التاريخية، وتجربة التسوق العصرية في مراكز التسوق الحديثة."
  },
  "مكة المكرمة": {
    types: ["سياحة دينية", "سياحة تراثية", "سياحة ثقافية"],
    description: "مكة المكرمة وجهة للسياحة الدينية والروحانية، مع مواقع تاريخية وتراثية هامة تعكس تاريخ الإسلام والحضارة الإسلامية."
  },
  "الرياض": {
    types: ["سياحة حضرية", "سياحة تراثية", "سياحة تسوق", "سياحة صحراوية"],
    description: "تجمع الرياض بين الحداثة والتراث، مع مزيج من المعالم التاريخية والمباني الشاهقة، والأسواق التقليدية والمجمعات العصرية."
  },
  "الخبر": {
    types: ["سياحة بحرية", "سياحة عائلية", "سياحة تسوق"],
    description: "تتميز الخبر بواجهتها البحرية الجميلة، والمرافق الترفيهية العائلية، ومراكز التسوق الحديثة."
  },
  "العلا": {
    types: ["سياحة تراثية", "سياحة صحراوية", "سياحة مغامرات"],
    description: "العلا متحف مفتوح للتاريخ والطبيعة، تقدم تجارب فريدة في المواقع الأثرية والمناظر الطبيعية الخلابة."
  }
};

function renderCityGrid(cityList) {
  const grid = document.getElementById('cityGrid');
  if (!grid) return;
  grid.innerHTML = cityList.map(city => `
    <div class="city-card-container">
      <div class="city-card" data-city="${city.name}">
        <img class="city-card-img" src="${city.image || 'image/default-city.jpg'}" alt="${city.name}">
      </div>
      <div class="city-card-title">${city.name}</div>
    </div>
  `).join('');
}

// Fetch cities.json and render on load
fetch('cities.json')
  .then(res => res.json())
  .then(data => {
    cities = data;
    renderCityGrid(cities);
  });

document.addEventListener('DOMContentLoaded', () => {
  const cityGridSection = document.getElementById('cityGridSection');
  const btn = document.querySelector('.start-journey-btn');
  const heroSection = document.querySelector('.hero-image-section');
  if (cityGridSection) cityGridSection.classList.remove('visible');
  if (btn && cityGridSection) {
    btn.style.display = 'block';
    btn.onclick = () => {
      btn.style.display = 'none';
      cityGridSection.classList.add('visible');
      if (heroSection) heroSection.classList.add('hide-hero-titles');
      renderCityGrid(cities);
    };
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const showCitiesBtn = document.getElementById('showCitiesBtn');
  const cityGridSection = document.getElementById('cityGridSection');
  if (showCitiesBtn && cityGridSection) {
    showCitiesBtn.addEventListener('click', function() {
      showCitiesBtn.style.display = 'none';
      cityGridSection.style.display = 'block';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const revealCitiesBtn = document.getElementById('revealCitiesBtn');
  const heroCityGrid = document.getElementById('heroCityGrid');
  const heroContent = document.querySelector('.hero-content');
  if (revealCitiesBtn && heroCityGrid && heroContent) {
    revealCitiesBtn.addEventListener('click', function() {
      // Hide hero text and buttons
      const h1 = heroContent.querySelector('h1');
      const p = heroContent.querySelector('p');
      const heroButtons = heroContent.querySelector('.hero-buttons');
      if (h1) h1.style.display = 'none';
      if (p) p.style.display = 'none';
      if (heroButtons) heroButtons.style.display = 'none';
      // Instantly hide the button
      revealCitiesBtn.style.display = 'none';
      heroCityGrid.style.display = 'block';
      setTimeout(() => {
        heroCityGrid.classList.add('active');
      }, 10);
      // Render city cards in hero section using loaded cities
      renderHeroCityGrid();
    });
  }
});

// Add weather fetching function
async function fetchWeather(cityName) {
  const apiKey = 'YOUR_API_KEY_HERE';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},sa&appid=${apiKey}&units=metric&lang=ar`);
    const data = await response.json();
    return {
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

// Update the renderCityDetails function
function renderCityDetails(cityName) {
  const detailsContainer = document.getElementById('cityDetailsHero');
  if (!detailsContainer) return;
  
  const normalize = str => (str || '').trim().replace(/\s+/g, '');
  const city = cities.find(c => normalize(c.name) === normalize(cityName));
  
  const hotels = hotelsData[cityName] || [];
  const guides = guidesData[cityName] || [];
  const tourism = tourismTypes[cityName] || { types: [], description: "معلومات السياحة غير متوفرة." };
  const eventText = (city && city.event && city.event.trim()) ? city.event : "لا توجد فعاليات حالياً.";
  
  // Create weather element
  const weatherElement = document.createElement('div');
  weatherElement.className = 'weather-info';
  weatherElement.innerHTML = '<div class="loading-weather">جاري تحميل معلومات الطقس...</div>';
  
  detailsContainer.innerHTML = `
    <div class="city-details-box">
      <div class="city-event-section">
        <h3>معلومات المدينة</h3>
        <p><b>المدينة:</b> ${cityName}</p>
        <div class="weather-container"></div>
        <div class="tourism-types">
          <p><b>أنواع السياحة:</b></p>
          <div class="tourism-tags">
            ${tourism.types.map(type => `<span class="tourism-tag">${type}</span>`).join('')}
          </div>
          <p class="tourism-description">${tourism.description}</p>
        </div>
        <p><b>الفعالية الحالية:</b> ${eventText}</p>
        <a href="city-details.html?city=${encodeURIComponent(cityName)}" class="show-more-btn">عرض المزيد من التفاصيل</a>
      </div>
      <div class="city-hotels-section">
        <h3>أفضل الفنادق في ${cityName}</h3>
        <ul>
          ${hotels.slice(0, 1).map(hotel => `
            <li>
              <div><b>${hotel.name}</b> <span>⭐${hotel.rating}</span></div>
              <div class="hotel-desc">${hotel.desc || ''}</div>
              <div class="hotel-meta">📍 ${hotel.address || ''} | ☎️ ${hotel.phone || ''}</div>
              <a href="${hotel.url || 'https://www.example.com'}" target="_blank" class="hotel-website-btn">زيارة الموقع</a>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="city-guides-section">
        <h3>أفضل المرشدين السياحيين في ${cityName}</h3>
        <ul>
          ${guides.slice(0, 1).map(guide => `
            <li>
              <div><b>${guide.name}</b> <span>⭐${guide.rating}</span></div>
              <div class="guide-desc">${guide.desc || ''}</div>
              <div class="guide-meta">☎️ ${guide.phone || ''}</div>
              <a href="https://wa.me/${guide.phone ? guide.phone.replace(/[^\d]/g, '') : ''}" target="_blank" class="guide-book-btn">احجز الآن</a>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  // Add weather container to the DOM
  const weatherContainer = detailsContainer.querySelector('.weather-container');
  weatherContainer.appendChild(weatherElement);

  // Fetch and update weather
  fetchWeather(cityName).then(weather => {
    if (weather) {
      weatherElement.innerHTML = `
        <div class="weather-data">
          <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="حالة الطقس">
          <span class="temp">${weather.temp}°C</span>
          <span class="desc">${weather.description}</span>
        </div>
      `;
    } else {
      weatherElement.innerHTML = '<div class="weather-error">عذراً، لا يمكن تحميل معلومات الطقس حالياً.</div>';
    }
  });
  
  // Add active class to show the details with animation
  detailsContainer.classList.add('active');
}

// Patch the city grid rendering to enable clicks
const oldRender = document.getElementById('revealCitiesBtn')?.onclick;
function enableHeroCityCardClicks() {
  const grid = document.getElementById('cityGridHero');
  if (!grid) return;
  grid.querySelectorAll('.city-card').forEach(card => {
    card.onclick = function() {
      const cityName = card.getAttribute('data-city');
      renderCityDetails(cityName);
    };
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const revealCitiesBtn = document.getElementById('revealCitiesBtn');
  if (revealCitiesBtn) {
    const oldHandler = revealCitiesBtn.onclick;
    revealCitiesBtn.onclick = function(e) {
      if (oldHandler) oldHandler.call(this, e);
      // Only enable clicks after cities are loaded
      if (cities && cities.length > 0) {
        enableHeroCityCardClicks();
      }
    };
  }
});

// Update hero city grid rendering to use loaded cities
function renderHeroCityGrid() {
  const grid = document.getElementById('cityGridHero');
  if (!grid) return;
  grid.innerHTML = cities.map(city => `
    <div class="city-card-container">
      <div class="city-card" data-city="${city.name}">
        <img class="city-card-img" src="${city.image || 'image/default-city.jpg'}" alt="${city.name}">
      </div>
      <div class="city-card-title">${city.name}</div>
    </div>
  `).join('');

  // Add click event listeners to city cards
  const cityCards = grid.querySelectorAll('.city-card');
  cityCards.forEach(card => {
    card.addEventListener('click', function() {
      const cityName = this.getAttribute('data-city');
      const detailsContainer = document.getElementById('cityDetailsHero');
      // Remove active class from all cards
      cityCards.forEach(c => c.classList.remove('active'));
      // Add active class to clicked card
      this.classList.add('active');
      // Show details for the clicked city
      renderCityDetails(cityName);
    });
  });
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  
  // Update icon
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
  
  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const headerNav = document.querySelector('.header-nav');

const menuOverlay = document.querySelector('.menu-overlay');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  headerNav.classList.toggle('active');
  document.body.classList.toggle('menu-open');
  menuOverlay.classList.toggle('active');
});

// Also close menu when clicking the overlay
menuOverlay.addEventListener('click', () => {
  mobileMenuToggle.classList.remove('active');
  headerNav.classList.remove('active');
  document.body.classList.remove('menu-open');
  menuOverlay.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!headerNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
    mobileMenuToggle.classList.remove('active');
    headerNav.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

// Close menu when clicking on a link
const headerLinks = document.querySelectorAll('.header-link');
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    headerNav.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

function showCityDetailsOverlayMobile() {
  const details = document.getElementById('cityDetailsHero');
  const grid = document.getElementById('cityGridHero');
  if (!details || !grid) return;
  details.classList.add('active');
  grid.classList.add('hide');
  document.body.style.overflow = 'hidden'; // lock scroll
  // Remove old close button if present
  const oldBtn = details.querySelector('.city-details-close');
  if (oldBtn) oldBtn.remove();
  // Add close button
  const btn = document.createElement('button');
  btn.className = 'city-details-close';
  btn.innerHTML = '&times;';
  btn.onclick = function(e) {
    e.stopPropagation();
    hideCityDetailsOverlayMobile();
  };
  details.prepend(btn);
  // Close when clicking outside the content (but not on the content itself)
  details.onclick = function(e) {
    if (e.target === details) hideCityDetailsOverlayMobile();
  };
}
function hideCityDetailsOverlayMobile() {
  const details = document.getElementById('cityDetailsHero');
  const grid = document.getElementById('cityGridHero');
  if (!details || !grid) return;
  details.classList.remove('active');
  grid.classList.remove('hide');
  document.body.style.overflow = ''; // restore scroll
  // Remove close button to avoid duplicates
  const btn = details.querySelector('.city-details-close');
  if (btn) btn.remove();
  // Remove the click handler to avoid memory leaks
  details.onclick = null;
}

// Patch city card click for mobile overlay
function enableHeroCityCardClicks() {
  const grid = document.getElementById('cityGridHero');
  if (!grid) return;
  grid.querySelectorAll('.city-card').forEach(card => {
    card.onclick = function() {
      const cityName = card.getAttribute('data-city');
      renderCityDetails(cityName);
      if (window.innerWidth <= 768) {
        showCityDetailsOverlayMobile();
      }
    };
  });
}

// Floating Icons Scroll Control and Up/Down Functionality
document.addEventListener('DOMContentLoaded', function() {
  const floatingIcons = document.querySelector('.floating-icons');
  const aboutSection = document.querySelector('.about-section');
  const scrollUpIcon = document.getElementById('scrollUpIcon');
  const scrollDownIcon = document.getElementById('scrollDownIcon');

  let lastScrollY = window.scrollY;
  let ticking = false;

  // Show/hide icons after about section and make them follow
  function updateFloatingIcons() {
    if (!floatingIcons || !aboutSection) return;
    
    const aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    if (aboutSectionBottom < 0) {
      floatingIcons.style.display = 'flex';
      
      // Calculate position based on scroll
      const maxScroll = document.body.scrollHeight - windowHeight;
      const scrollPercentage = (scrollY / maxScroll) * 100;
      
      // Position the icons relative to viewport with smooth following
      floatingIcons.style.position = 'fixed';
      floatingIcons.style.right = '20px';
      
      // Calculate the vertical position based on scroll
      const viewportHeight = window.innerHeight;
      const minTop = 20; // Minimum distance from top
      const maxTop = viewportHeight - floatingIcons.offsetHeight - 20; // Maximum distance from top
      const targetTop = minTop + (scrollPercentage / 100) * (maxTop - minTop);
      
      // Apply smooth transition
      floatingIcons.style.transition = 'top 0.3s ease-out';
      floatingIcons.style.top = `${targetTop}px`;
      floatingIcons.style.zIndex = '1000';
    } else {
      floatingIcons.style.display = 'none';
    }
    
    ticking = false;
  }

  // Use requestAnimationFrame for smooth scrolling
  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateFloatingIcons();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Update on scroll and resize
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateFloatingIcons);
  updateFloatingIcons(); // Run on load

  // Scroll up
  if (scrollUpIcon) {
    scrollUpIcon.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Scroll down
  if (scrollDownIcon) {
    scrollDownIcon.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
});
