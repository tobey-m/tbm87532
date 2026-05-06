// ===== GALLERY DATA =====
// เพิ่มรูปใหม่ที่นี่ที่เดียว ไม่ต้องแตะ index.html
//
// cover: รูปที่โชว์บนหน้า gallery หลัก (ถ้าไม่ระบุจะใช้รูปแรกใน items)
// items: รูปทั้งหมดที่โชว์เมื่อกดเข้า album

const GALLERY = [
  {
    tag: '#journey',
    cover: 'images/journey.jpg',
    folder: 'images/journey/',
    items: [
      { file: 'japan-01.jpg', caption: 'arashiyama.' },
      { file: 'japan-02.jpg', caption: 'kittykitty.' },
      { file: 'japan-03.jpg', caption: 'wonderful %.' },
      { file: 'bday.jpg', caption: 'bakery first time.' },
      { file: 'chiangdao on jan-26.jpg', caption: 'chiangdao on jan-26.' },
      { file: 'jeju-01.jpg', caption: 'me and friends' },
      { file: 'jeju-02.jpg', caption: 'jeongbang waterfal' },
      { file: 'jeju-03.jpg', caption: 'utmb jeju at world cup stadium' },
      { file: 'jeju-04.jpg', caption: 'hallasan natural' },
      { file: 'jeju-05.jpg', caption: 'hallasan natural' },
      { file: 'jeju-06.jpg', caption: 'hallasan natural' },
      { file: 'jeju-07.jpg', caption: 'city' },
      { file: 'jeju-08.jpg', caption: 'jeju sky' },
      { file: 'jeju-09.jpg', caption: 'yummmmyy' },
      { file: 'jeju-10.jpg', caption: 'so vibe' },
      { file: 'jeju-11.jpg', caption: 'so vibe' },
      { file: 'jeju-12.jpg', caption: 'so vibe' },
      { file: 'seoul-01.jpg', caption: 'dammboi' },
      { file: 'seoul-02.jpg', caption: 'flower shop' },
      { file: 'seoul-03.jpg', caption: 'bike !' },
      { file: 'seoul-04.jpg', caption: 'changdeokgung palace' },
      { file: 'seoul-05.jpg', caption: 'every morning day ! market' },
      { file: 'seoul-06.jpg', caption: 'EWHA' },
      { file: 'seoul-07.jpg', caption: 'EWHA vibe' },
      { file: 'seoul-08.jpg', caption: 'catttt' },
      { file: 'seoul-09.jpg', caption: 'cn-seoul from changdeokgung' },
      { file: 'seoul-10.jpg', caption: 'catttttt' },
      { file: 'taiwan-01.jpg', caption: 'keelung' },
      { file: 'taiwan-02.jpg', caption: 'temple' },
      { file: 'taiwan-03.jpg', caption: 'temple' },
      { file: 'taiwan-05.jpg', caption: 'taipei main station' },
      { file: 'taiwan-06.jpg', caption: 'so drunk lol' },
      // เพิ่มรูปที่นี่:
      // { file: 'japan-04.jpg', caption: 'caption' },
    ]
  },
  {
    tag: '#lovethings',
    cover: 'images/lovethings.jpg',   // ← รูป cover ที่มีอยู่แล้ว
    folder: 'images/lovethings/',
    items: [
      { file: 'pagoda50-2022.jpg', caption: 'pagoda50-2022' },
      { file: 'phakan15k-2023-overall.JPG', caption: 'phakan15k-2023-overall' },
      { file: 'dmt40-2023-4th overall.jpg', caption: 'dmt40-2023-4th overall' },
      { file: 'doichang35k-2023.JPG', caption: 'doichang35k-2023' },
      { file: 'transjeju-2024-77th.JPG', caption: 'transjeju-2024-77th' },
      { file: 'jaehomhalf-2024.JPG', caption: 'jaehomhalf-2024' },
      // เพิ่มรูปที่นี่:
      // { file: 'photo.jpg', caption: 'caption' },
    ]
  },
  {
    tag: '#styles',
    cover: 'images/styles.jpg',       // ← รูป cover ที่มีอยู่แล้ว
    folder: 'images/styles/',
    items: [
      // เพิ่มรูปที่นี่:
      // { file: 'photo.jpg', caption: 'caption' },
    ]
  },
  {
    tag: '#grooves',
    cover: 'images/grooves.jpg',      // ← รูป cover ที่มีอยู่แล้ว
    folder: 'images/grooves/',
    items: [
      // เพิ่มรูปที่นี่:
      // { file: 'photo.jpg', caption: 'caption' },
    ]
  },
];