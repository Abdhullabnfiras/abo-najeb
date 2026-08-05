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
    { id: 'chicken', name: 'منيو الدجاج', order: 1 },
    { id: 'meat',    name: 'منيو اللحم',  order: 2 },
    { id: 'extras',  name: 'الإضافات',    order: 3 },
    { id: 'drinks',  name: 'المشروبات',   order: 4 }
  ],
  items: [
    // منيو الدجاج (chicken)
    { id: 101, cat: 'chicken', name: 'كص دجاج فرنسي سبيشل', desc: 'صمون فرنسي, كص دجاج, ثومية, مخلل', price: 5500, img: 'شاورما دجاج صمون حجري.webp' },
    { id: 102, cat: 'chicken', name: 'لفة كص دجاج حجري', desc: 'صمون حجري عراقي, كص دجاج, ثومية, مخلل', price: 4000, img: 'شاورما دجاج صمون حجري.webp' },
    { id: 103, cat: 'chicken', name: 'ربع كيلو كص دجاج', desc: 'كص دجاج 250 غم, ثومية, مخلل, صمون', price: 10000, img: 'نص كيلو شاورما دجاج.webp' },
    { id: 104, cat: 'chicken', name: 'نصف كيلو كص دجاج', desc: 'كص دجاج 500 غم, ثومية, مخلل, صمون', price: 20000, img: 'نص كيلو شاورما دجاج.webp' },
    { id: 105, cat: 'chicken', name: 'كيلو كص دجاج', desc: 'كص دجاج 1 كيلو, ثومية, مخلل, صمون', price: 40000, img: 'نص كيلو شاورما دجاج.webp' },

    // منيو اللحم (meat) — لحوم عراقية ١٠٠٪
    { id: 201, cat: 'meat', name: 'لفة كص لحم حجري', desc: 'صمون حجري عراقي, كص لحم عراقي, طماطم, مخلل', price: 6500, img: 'شاورما لحم صمون حجري.webp' },
    { id: 202, cat: 'meat', name: 'كص لحم فرنسي', desc: 'صمون فرنسي, كص لحم عراقي, طماطم, مخلل', price: 7000, img: 'شاورما لحم صمون فرنسي.webp' },
    { id: 203, cat: 'meat', name: 'ماعون حمص باللحمة', desc: 'حمص بطحينة, كص لحم عراقي', price: 7500, img: 'حمص بل لحمة.webp' },
    { id: 204, cat: 'meat', name: '200 غرام كص لحم', desc: 'كص لحم عراقي 200 غم, طماطم, مخلل, صمون', price: 15000, img: 'نفر شاورما لحم.webp' },
    { id: 205, cat: 'meat', name: 'ربع كيلو كص لحم', desc: 'كص لحم عراقي 250 غم, طماطم, مخلل, صمون', price: 18000, img: 'نفر شاورما لحم.webp' },
    { id: 206, cat: 'meat', name: 'نصف كيلو كص لحم', desc: 'كص لحم عراقي 500 غم, طماطم, مخلل, صمون', price: 35000, img: 'نفر شاورما لحم.webp' },
    { id: 207, cat: 'meat', name: 'كيلو كص لحم', desc: 'كص لحم عراقي 1 كيلو, طماطم, مخلل, صمون', price: 68000, img: 'نفر شاورما لحم.webp' },

    // الإضافات (extras)
    { id: 301, cat: 'extras', name: 'إضافة صوص', desc: 'صوص إضافي', price: 1000, img: 'ثوميه.webp' },
    { id: 302, cat: 'extras', name: 'مقبلات صغير', desc: 'ماعون مقبلات صغير', price: 2500, img: 'مقبلات صغير.webp' },
    { id: 303, cat: 'extras', name: 'مقبلات وسط', desc: 'ماعون مقبلات وسط', price: 5000, img: 'مقبلات وسط.webp' },
    { id: 304, cat: 'extras', name: 'مقبلات كبير', desc: 'ماعون مقبلات كبير', price: 7500, img: 'مقبلات كبير.webp' },
    { id: 305, cat: 'extras', name: 'ماعون بتيتة شرائح', desc: 'اضافة جانبية — ماعون بتيتة شرائح', price: 3500, img: 'صحن بطاطا.webp' },

    // المشروبات (drinks)
    { id: 401, cat: 'drinks', name: 'بارد', desc: 'مشروب غازي بارد من اختيارك', price: 750, img: 'مشروبات غازية.webp' },
    { id: 402, cat: 'drinks', name: 'لبن', desc: 'مشروب لبن', price: 1000, img: 'لبن.webp' },
    { id: 403, cat: 'drinks', name: 'ماء', desc: 'مياه معدنية', price: 250, img: 'ماء.webp' }
  ]
};
