const ClockContainer = document.querySelector(".callbar__clock");
let time = +new Date().toLocaleTimeString("uk-UA", { hour: "2-digit" });
let hour = new Date().toLocaleTimeString("uk-UA", {
  hour: "2-digit",
  minute: "2-digit",
});
if (time >= 0 && time <= 5) {
  ClockContainer.innerText = `Доброї ночі! Зараз ${hour}, але наш відділ продажу не спить і готовий прийняти Ваше замовлення. Телефонуйте:`;
} else if (time >= 0 && time <= 5);
else if (time >= 6 && time <= 7) {
  ClockContainer.innerText = `Доброго ранку! Зараз ${hour}, ранку,і Ви ще встигаєте замовити єнота на сьогодні. Телефонуйте`;
} else if (time >= 8 && time <= 16) {
  ClockContainer.innerText = `Доброго дня! Зараз ${hour}, робочий день в розпалі, і наш єнот міг би допомагати Вам уже сьогодні. Телефонуйте`;
} else if (time >= 17 && time <= 23) {
  ClockContainer.innerText = `Доброго вечора! Зараз ${hour}, якраз час вибрати собі єнота помічника на завтра. Телефонуйте`;
}

