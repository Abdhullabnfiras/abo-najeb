// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHdVB4DEbEGMV7GvYhyC3yU1tP7wDGQQA",
  authDomain: "abo-najeb.firebaseapp.com",
  projectId: "abo-najeb",
  storageBucket: "abo-najeb.firebasestorage.app",
  messagingSenderId: "697218675282",
  appId: "1:697218675282:web:528f69d8677cb2dd29a58b",
  measurementId: "G-WJT8GSCVP9",
  databaseURL: "https://abo-najeb-default-rtdb.firebaseio.com"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

const initialData = {
  categories: [
    { id: 'rice', name: 'الريزو' },
    { id: 'shawarma', name: 'الشاورما' },
    { id: 'meals', name: 'الوجبات' },
    { id: 'fries', name: 'الفنكر' },
    { id: 'extras', name: 'المقبلات' },
    { id: 'sauces', name: 'الصلصات' },
    { id: 'drinks', name: 'المشروبات' }
  ],
  items: [
    // الريزو (rice)
    { id: 101, cat: 'rice', name: 'ريزو', desc: 'رز اصفر, شاورما دجاج, صلصة ابو نجيب الكلاسيكية', price: 6500, img: 'ريزو.webp', badge: 'unavailable' },
    { id: 102, cat: 'rice', name: 'ريزو مدخن', desc: 'رز اصفر, شاورما دجاج, صلصة ابو نجيب المدخنة', price: 6500, img: 'ريزو.webp', badge: 'unavailable' },

    // الشاورما (shawarma)
    { id: 201, cat: 'shawarma', name: 'ربع كيلو شاورما دجاج', desc: 'شاورما دجاج 250 غم, ثومية, مخلل, 3 صمون حجري عراقي', price: 12500, img: 'شاورما دجاج صمون حجري.webp' },
    { id: 202, cat: 'shawarma', name: 'شاورما دجاج بالصمون الفرنسي', desc: 'صمون فرنسي, شاورما دجاج, ثومية, مخلل', price: 6000, img: 'شاورما دجاج صمون حجري.webp' },
    { id: 203, cat: 'shawarma', name: 'صاج دجاج خبز شراك', desc: 'خبز شراك سوري, شاورما دجاج, ثومية, مخلل, دبس الرمان', price: 4500, img: 'وجبه شاورما دجاج بخبز الشراك.webp', badge: 'unavailable' },
    { id: 204, cat: 'shawarma', name: 'نص كيلو شاورما دجاج', desc: 'شاورما دجاج 500 غم, ثومية, مخلل, 6 صمون حجري عراقي', price: 25000, img: 'نص كيلو شاورما دجاج.webp' },
    { id: 205, cat: 'shawarma', name: 'طماطم و لية', desc: 'لية غنم عراقي, طماطم', price: 3000, img: 'طماطه ولية.webp', badge: 'unavailable' },
    { id: 206, cat: 'shawarma', name: 'شاورما لحم بالصمون الحجري', desc: 'صمون حجري عراقي, شاورما لحم عراقي, طماطم, مخلل', price: 7500, img: 'شاورما لحم صمون حجري.webp' },
    { id: 207, cat: 'shawarma', name: 'شاورما دجاج بالصمون الحجي', desc: 'صمون حجري عراقي, شاورما دجاج, ثومية, مخلل', price: 5000, img: 'شاورما دجاج صمون حجري.webp' },
    { id: 208, cat: 'shawarma', name: 'صاج لحم بخبز الشراك', desc: 'شاورما لحم, ثومية, مخلل, معدنوس, بصل, طماطم, صلصة طرطور, دبس رمان', price: 7500, img: 'صاح لحم بخبز الشراك.webp', badge: 'unavailable' },
    { id: 209, cat: 'shawarma', name: 'نفر شاورما لحم', desc: 'شاورما لحم 200 غم, طماطم, مخلل, 2 صمون حجري عراقي', price: 18000, img: 'نفر شاورما لحم.webp' },
    { id: 210, cat: 'shawarma', name: 'حمص باللحمة', desc: 'شاورما لحم, حمص بطحينة, 2 صمون حجري عراقي', price: 9000, img: 'حمص بل لحمة.webp' },
    { id: 211, cat: 'shawarma', name: 'كص عراقي على التمن', desc: 'رز اصفر, شاورما لحم عراقي', price: 12000, img: 'كص عراقي على التمن.webp', badge: 'unavailable' },
    { id: 212, cat: 'shawarma', name: 'شاورما لحم بالصمون الفرنسي', desc: 'صون فرنسي, شاورما لحم عراقي, طماطم, مخلل', price: 8500, img: 'شاورما لحم صمون فرنسي.webp' },
    { id: 213, cat: 'shawarma', name: 'صلصة مدخنة', desc: 'صلصة ابو نجيب المدخنة', price: 1000, img: 'ثوميه.webp', badge: 'unavailable' },

    // الوجبات (meals)
    { id: 301, cat: 'meals', name: 'وجبة شاورما دجاج بخبز الشراك', desc: 'خبز شراك المقطع, شاورما دجاج, ثومية, دبس رمان, بطاطا محمرة, بيبسي', price: 7500, img: 'وجبه شاورما دجاج بخبز الشراك.webp', badge: 'unavailable' },
    { id: 302, cat: 'meals', name: 'وجبة شاورما لحم بخبز الشراك', desc: 'خبز الشراك المقطع, شاورما لحم, ثومية, دبس رمان, معدنوس, بصل, طماطم, بطاطا محمرة مقلية, بيبسي', price: 12000, img: 'وجبه شاورما لحم بخبز الشراك.webp', badge: 'unavailable' },

    // الفنكر (fries)
    { id: 401, cat: 'fries', name: 'صحن بطاطا', desc: 'صحن بطاطا مقلية', price: 4000, img: 'صحن بطاطا.webp', badge: 'new' },
    { id: 402, cat: 'fries', name: 'بطاطا ابو نجيب', desc: 'بطاطا دائرية, ثومية, صلصة سبايسي ابو نجيب, صلصة ابو نجيب المدخنة, صلصة ابو نجيب الكلاسيكية, كاتشاب, قطعة محمرة, دبس رمان', price: 6000, img: 'بطاطا ابو نجيب.webp', badge: 'unavailable' },

    // المقبلات (extras)
    { id: 501, cat: 'extras', name: 'مقبلات صغير', desc: 'صحن مقبلات صغير', price: 3500, img: 'مقبلات صغير.webp', badge: 'new' },
    { id: 502, cat: 'extras', name: 'مقبلات وسط', desc: 'صحن مقبلات وسط', price: 6500, img: 'مقبلات وسط.webp', badge: 'new' },
    { id: 503, cat: 'extras', name: 'مقبلات كبير', desc: 'صحن مقبلات كبير', price: 8500, img: 'مقبلات كبير.webp', badge: 'new' },

    // الصلصات (sauces)
    { id: 601, cat: 'sauces', name: 'ثومية', desc: 'صلصة الثومية', price: 1000, img: 'ثوميه.webp', badge: 'unavailable' },
    { id: 602, cat: 'sauces', name: 'صلصة سبايسي', desc: 'صلصة سبايسي حارة', price: 1000, img: 'ثوميه.webp', badge: 'unavailable' },
    { id: 603, cat: 'sauces', name: 'طرطور', desc: 'صلصة طرطور', price: 1000, img: 'ثوميه.webp', badge: 'unavailable' },

    // المشروبات (drinks)
    { id: 701, cat: 'drinks', name: 'مشروبات غازية', desc: 'مشروب غازي من اختيارك', price: 750, img: 'مشروبات غازية.webp', badge: 'new' },
    { id: 702, cat: 'drinks', name: 'مياه معدنية', desc: 'مياه معدنية', price: 250, img: 'ماء.webp', badge: 'new' },
    { id: 703, cat: 'drinks', name: 'لبن', desc: 'مشروب لبن كريمي', price: 1000, img: 'لبن.webp', badge: 'unavailable' }
  ]
};
