const menu = [
  {
    id: 1,
    title: "김가네 시민 고기국수",
    category: "면",
    price: "8,000원~",
    img: "./images/고기국수1.jpg",
    desc: ` 메뉴: 고기국수, 국밥, 만두, 수육 등 <br>
     장점 : 흔한 고기국수 맛 고기 양은 주위에 비해 조금 많은편 <br>
     단점 : 멀다. 다녀오면 시간이 부족할 수 있다. 막걸리를 공짜로 먹을 수 있지만 수업이 있어 저녘에 가는 것이 나을 수 있다`,
  },
  {
    id: 2,
    title: "대중음식점 다온",
    category: "밥",
    price: "7,000원~",
    img: "./images/제육덮밥.jpg",
    desc: ` 메뉴: 중화비빔밥, 칠리오므라이스, 제육덮밥, 콩나물국밥 등 </br>
            장점: 가까운 거리와 취향에 맞으면 가격대비 준수한 맛 </br>
            단점: 퓨전음식점 느낌이라 호불호 갈릴 수 있다 </br> `,
  },
  {
    id: 3,
    title: "American Burger Club",
    category: "햄버거",
    price: "6,000원~",
    img: "./images/BugerClub.jpg",
    desc: `메뉴: 치즈버거, 칠리치즈 프라이즈 등 <br>
            장점:  준수한 수제버거집. 치즈의 꾸덕함이 특징<br>
            단점:  세트로 먹을 경우 버거킹보다 비싸다. 치즈를 별로 안좋아하면 느끼할 수 있다.  `,
  },
  {
    id: 4,
    title: "수국수",
    category: "면",
    price: "7,000원~",
    img: "./images/비빔국수.jpg",
    desc: `메뉴: 잔치국수, 비빔국수, 콩국수, 계란김밥 등</br>
           장점: 매콤새콤한 게 땡길 때 갈만한 곳 계란지단이 많아 이것 또한 별미이다.</br>
           단점: 혼자 가면 보통 사람의 경우 김밥까지 시키기에는 많다. 국수 치고는 비싼 편 `,
  },
  {
    id: 5,
    title: "라멘무라",
    category: "면",
    price: "8,000원~",
    img: "./images/라멘.jpg",
    desc: `메뉴: 돈코츠라멘(맵게,진하게 조절 가능), 미소라멘, 소유라멘, 계란초밥(와사비,마요네즈,반반) </br>
           장점: 진하게 시키면 대전 내에서 가장 진한 본토에 가까운 맛을 느낄 수 있다. 계란초밥이 크고 맛있다. </br>
           단점: 멀다. 심지어 사람도 많아 점심시간에는 먹기 힘들다.  `,
  },
  {
    id: 6,
    title: "황궁쟁반짜장",
    category: "면",
    price: "6,500원~",
    img: "./images/쟁반짜장.jpg",
    desc: `메뉴: 황궁쟁반짜장(곱 추천), 유니짜장, 황궁 쟁반볶음밥 등</br>
           장점: 가깝다. 그냥 짜장면 시키면 상대적으로 저렴하게 먹을 수 있다.  </br>
           단점: 간단한 떼우기용 메뉴마다 격차가 심하다. (필자 입맛으로는 여기 간짜장 별로다)`,
  },
  {
    id: 7,
    title: "백반예찬",
    category: "밥",
    price: "8,000원",
    img: "./images/백반예찬.jpg",
    desc: `메뉴: 백반뷔페 등</br>
           장점: 무난한 한식 무한리필집 항상 고기가 있어 가끔 찾기엔 괜찮다.</br>
           단점: 멀다. 가격이 싼 만큼 퀄리티가 좋진 못하다.`,
  },
  {
    id: 8,
    title: "원두막 칼국수",
    category: "밥",
    price: "8,000원~",
    img: "./images/제육볶음.jpg",
    desc: `메뉴: 제육볶음, 청국장, 수제비, 열무국수, 얼큰이 칼국수, 쭈꾸미볶음 등 </br>
           장점: 제육과 청국장 맛집 반찬도 많고 집밥 느낌이 난다. </br>
           단점: 반찬이 많이 나와서 그런가 메인의 양이 아쉬울 수 있다. `,
  },
  // {
  //   id: 9,
  //   title: "quarantine buddy",
  //   category: "shakes",
  //   price: 16.99,
  //   img: "./images/item-9.jpeg",
  //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  // },
  // {
  //   id: 10,
  //   title: "steak dinner",
  //   category: "dinner",
  //   price: 39.99,
  //   img: "./images/item-10.jpeg",
  //   desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  // },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // menuItems
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
    </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
