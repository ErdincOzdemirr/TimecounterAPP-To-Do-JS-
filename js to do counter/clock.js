let isim = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = ` ${isim}`;

function zaman() {
  const date = new Date();

  let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  seconds = date.getSeconds();
  dayNumber = date.getDay()
let months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]

  let clock = document.querySelector("#myClock");
  clock.innerHTML = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${seconds}`;
}

setInterval(zaman, 1000)
