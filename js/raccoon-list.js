const raccoons = [
    {
      id: 1,
      title: "Алі",
      profession: "різноробочий",
      class: "company worker",
      image: "img/raccoons/Ali worker.jpg",
      description: "Алі - різноробочий, який завжди готовий допомогти.",
      price: "від 1$ за годину",
    },
    {
      id: 2,
      title: "Боб",
      profession: "вчитель",
      class: "teacher",
      image: "img/raccoons/Bob teacher.jpg",
      description: "Боб - досвідчений вчитель, який любить ділитися знаннями.",
      price: "від 5$ за урок",
    },
    {
      id: 3,
      title: "Куртіс",
      profession: "програміст",
      class: "programmer",
      image: "img/raccoons/Curtis programmer.jpg",
      description: "Куртіс - талановитий програміст, що створює надійний код.",
      price: "від 20$ за годину",
    },
    {
      id: 4,
      title: "Бригада Копачів",
      profession: "будівельники",
      class: "brigade",
      image: "img/raccoons/Digger brigade.jpg",
      description: "Надійна бригада копачів, яка швидко виконає земляні роботи.",
      price: "від 10$ за проєкт",
    },
    {
      id: 5,
      title: "Еміль",
      profession: "перукар",
      class: "frisor",
      image: "img/raccoons/Emil frisor.jpg",
      description: "Еміль - майстер-перукар, що створює стильні зачіски.",
      price: "від 15$ за стрижку",
    },
    {
      id: 6,
      title: "Бригада шахраїв",
      profession: " ",
      class: "brigade",
      image: "img/raccoons/Frouder brigade.jpg",
      description: "Виконає будь яке замовлення.",
      price: "договірна",
    },
    {
      id: 7,
      title: "Янек",
      profession: "музикант",
      class: "musician",
      image: "img/raccoons/Janek musician.jpg",
      description: "Янек - віртуозний музикант, що грає на багатьох інструментах.",
      price: "від 30$ за виступ",
    },
    {
      id: 8,
      title: "Каріна",
      profession: "художник",
      class: "painter",
      image: "img/raccoons/Karina painter.jpg",
      description: "Каріна - талановита художниця, яка створює унікальні картини.",
      price: "від 20$ за картину",
    },
    {
      id: 9,
      title: "Лєшек",
      profession: "копірайтер",
      class: "copywriter",
      image: "img/raccoons/Leshek copyriter.jpg",
      description: "Лєшек - креативний копірайтер з багатим досвідом у маркетингу.",
      price: "від 15$ за 1000 знаків",
    },
    {
      id: 10,
      title: "Мігель",
      profession: "садівник",
      class: "gardener",
      image: "img/raccoons/Miguel gardener.jpg",
      description: "Мігель - експерт із садівництва, який створить райський сад.",
      price: "від 7$ за годину",
    },
    {
      id: 11,
      title: "Мілана",
      profession: "секретар",
      class: "secretary",
      image: "img/raccoons/Milana secretary.jpg",
      description: "Мілана - відповідальний секретар, який організує ваші справи.",
      price: "від 10$ за годину",
    },
    {
      id: 12,
      title: "Микола",
      profession: "охоронець",
      class: "security guard",
      image: "img/raccoons/Mykola security guard.jpg",
      description: "Микола - досвідчений охоронець, що гарантує вашу безпеку.",
      price: "від 12$ за годину",
    },
    {
      id: 13,
      title: "Ніколас",
      profession: "садівник",
      class: "gardener",
      image: "img/raccoons/Nicolas gardener.jpg",
      description: "Ніколас - садівник, який знається на догляді за рослинами.",
      price: "від 7$ за годину",
    },
    {
      id: 14,
      title: "Оксана",
      profession: "журналіст",
      class: "reporter",
      image: "img/raccoons/Oksana reporter.jpg",
      description: "Оксана - досвідчений журналіст, що пише гострі репортажі.",
      price: "від 30$ за статтю",
    },
    {
      id: 15,
      title: "Олег",
      profession: "гід",
      class: "guide",
      image: "img/raccoons/Oleg guide.jpg",
      description: "Олег - захопливий гід, що проведе вас найкращими маршрутами.",
      price: "від 12$ за екскурсію",
    },
    {
      id: 16,
      title: "Педро",
      profession: "вчитель",
      class: "teacher",
      image: "img/raccoons/Pedro teacher.jpg",
      description: "Педро - кваліфікований вчитель, що знайде підхід до кожного учня.",
      price: "від 5$ за урок",
    },
    {
      id: 17,
      title: "Бригада залізничників",
      profession: "залізничники",
      class: "railroad-workers",
      image: "img/raccoons/railroad-workers brigade.jpg",
      description: "Досвідчена бригада залізничників для вашого проєкту.",
      price: "договірна",
    },
    {
      id: 18,
      title: "Сара",
      profession: "бариста",
      class: "barista",
      image: "img/raccoons/Sara barista.jpg",
      description: "Сара - майстер приготування кави, яка здивує вас смаком.",
      price: "від 3$ за чашку",
    },
    {
      id: 19,
      title: "Сара",
      profession: "лікар",
      class: "doctor",
      image: "img/raccoons/Sara doctor.jpg",
      description: "Сара - досвідчений лікар, який допоможе вам залишатися здоровими.",
      price: "від 25$ за консультацію",
    }
  ];

function renderRaccoons(raccoons) {
    let raccoonsHTML = "";
    for (const raccoon of   raccoons) {
        raccoonsHTML += `<article class="raccoon__item">
              <img class="raccoon__image" src="${raccoon.image}" alt="${raccoon.title}">
              <h3 class="raccoon__name">${raccoon.title}</h3>
              <p class="raccoon__profession">${raccoon.profession}</p>
              <p class="raccoon__description">
              ${raccoon.description}
              </p>
              <div class="raccoons__actions">
                  <button class="info-button button button-card">
                    Далі
                  </button>
                  <button class="buy-button button button-card">
                      Ціна - ${raccoon.price}
                  </button>
              </div>
          </article>`;
    }
    const raccoonsContainer = document.querySelector(".raccoons__list");
    raccoonsContainer.innerHTML = raccoonsHTML;
  }
  
  renderRaccoons(raccoons);