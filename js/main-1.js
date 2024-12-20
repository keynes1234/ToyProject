const menu = [
  {
    id: 1,
    title: "김가네 시민 고기국수",
    category: "면",
    price: "8,000원~",
    img: "./images/고기국수1.jpg",
    desc: ` <span>메뉴:</span> 고기국수, 국밥, 만두, 수육 등 <br>
            <span>장점 :</span> 흔한 고기국수 맛 고기 양은 주위에 비해 조금 많은편 <br>
            <span>단점 :</span> 멀다. 다녀오면 시간이 부족할 수 있다. 막걸리를 공짜로 먹을 수 있지만 수업이 있어 저녘에 가는 것이 나을 수 있다</br>
            <span>정기휴무 :</span> 없음`,
    // data: "<li> 멀다. 다녀오면 시간이 부족할 수 있다. 막걸리를 공짜로 먹을 수 있지만 수업이 있어 저녘에 가는 것이 나을 수 있다</li>",
  },
  {
    id: 2,
    title: "대중음식점 다온",
    category: "밥",
    price: "7,000원~",
    img: "./images/제육덮밥.jpg",
    desc: ` <span>메뉴 :</span> 중화비빔밥, 칠리오므라이스, 제육덮밥, 콩나물국밥 등 </br>
            <span>장점 :</span> 가까운 거리와 취향에 맞으면 가격대비 준수한 맛 </br>
            <span>단점 :</span> 퓨전음식점 느낌이라 호불호 갈릴 수 있다 </br>
            <span>정기휴무 :</span> 토요일 `,
  },
  {
    id: 3,
    title: "American Burger Club",
    category: "빵",
    price: "6,000원~",
    img: "./images/BugerClub.jpg",
    desc: `<span>메뉴:</span> 치즈버거, 칠리치즈 프라이즈 등 <br>
           <span>장점:</span>  준수한 수제버거집. 치즈의 꾸덕함이 특징<br>
           <span>단점:</span>  세트로 먹을 경우 버거킹보다 비싸다. 치즈를 별로 안좋아하면 느끼할 수 있다.</br>
           <span>정기휴무 :</span> 없음  `,
  },
  {
    id: 4,
    title: "수국수",
    category: "면",
    price: "7,000원~",
    img: "./images/비빔국수.jpg",
    desc: `<span>메뉴:</span> 잔치국수, 비빔국수, 콩국수, 계란김밥 등</br>
           <span>장점:</span> 매콤새콤한 게 땡길 때 갈만한 곳 계란지단이 많아 이것 또한 별미이다.</br>
           <span>단점:</span> 혼자 가면 보통 사람의 경우 김밥까지 시키기에는 많다. 국수 치고는 비싼 편</br>
           <span>정기휴무 :</span> 월요일, 일요일 `,
  },
  {
    id: 5,
    title: "라멘무라",
    category: "면",
    price: "8,000원~",
    img: "./images/라멘.jpg",
    desc: `<span>메뉴:</span> 돈코츠라멘(맵게,진하게 조절 가능), 미소라멘, 소유라멘, 계란초밥(와사비,마요네즈,반반) </br>
           <span>장점:</span> 진하게 시키면 대전 내에서 가장 진한 본토에 가까운 맛을 느낄 수 있다. 계란초밥이 크고 맛있다. </br>
           <span>단점:</span> 멀다. 심지어 사람도 많아 점심시간에는 먹기 힘들다.</br>
           <span> 정기휴무 :</span> 일요일`,
  },
  {
    id: 6,
    title: "황궁쟁반짜장",
    category: "면",
    price: "6,500원~",
    img: "./images/쟁반짜장.jpg",
    desc: `<span>메뉴:</span> 황궁쟁반짜장(곱 추천), 유니짜장, 황궁 쟁반볶음밥, 황궁 볶음우동 등</br>
           <span>장점:</span> 가깝다. 그냥 짜장면 시키면 상대적으로 저렴하게 먹을 수 있다. 메뉴에 없는 특별메뉴 볶음우동 추천으로 처음 먹어보니 '나 이런거 좋아하는구나' 함  </br>
           <span>단점:</span> 사람 많으면 내 순서에 안 나오는 경우가 많다 간단한 떼우기용 메뉴마다 격차가 심하다. (필자 입맛으로는 여기 간짜장 별로다)</br>
           <span> 정기휴무 :</span> 없음`,
  },
  {
    id: 7,
    title: "백반예찬",
    category: "밥",
    price: "8,000원",
    img: "./images/백반예찬.jpg",
    desc: `<span>메뉴:</span> 백반뷔페 등</br>
           <span>장점:</span> 무난한 한식 무한리필집 항상 고기가 있어 가끔 찾기엔 괜찮다.</br>
           <span>단점:</span> 멀다. 가격이 싼 만큼 퀄리티가 좋진 못하다.</br>
           <span> 정기휴무 :</span> 토요일, 일요일`,
  },
  {
    id: 8,
    title: "원두막 칼국수",
    category: "밥",
    price: "8,000원~",
    img: "./images/제육볶음.jpg",
    desc: `<span>메뉴:</span> 제육볶음, 청국장, 수제비, 열무국수, 얼큰이 칼국수, 쭈꾸미볶음 등 </br>
           <span>장점:</span> 제육과 청국장 맛집 반찬도 많고 집밥 느낌이 난다. </br>
           <span>단점:</span> 청국장이 주 메뉴이다 보니 청국장 냄새가 많이 날 수 있다.</br>
           <span> 정기휴무 :</span> 일요일, 따로 영업시간이 명시되어있지 않아 전화 후 방문 추천 `,
  },
  {
    id: 9,
    title: "목화제과",
    category: "빵",
    price: "2,500원~",
    img: "./images/목화제과.jpg",
    desc: `<span>메뉴 :</span> 소금빵, 화이트 볼, 명란 감자 소금빵, 궁극의 참치빵, 에그타르트 </br>
           <span>장점 :</span> 성심당이랑 비비는 맛, 빵지순례 필수코스 가까운 거리 가끔 밥 대신 간단하게 떼우기도 괜찮음 </br>
           <span>단점 :</span> 
            밥으로 먹기에는 조금 부족할 수 있다. 하루에 정해진 양 만큼만 팔기 때문에 조기소진될 가능성이 있다.</br>
            <span> 정기휴무 :</span> 월요일, 화요일 가끔 네이버 등에 고지하고 휴무할 수 있기에 확인 필요 `,
  },
  {
    id: 10,
    title: "투웨이 버거 치폴레",
    category: "빵",
    price: "5,900원~",
    img: "./images/투웨이.jpg",
    desc: `<span>메뉴 :</span> 치폴레버거 치폴레 베이컨치즈, 미트칠리 프라이</br>
           <span>장점 :</span> 부드러운 패티 약간의 소스 수제버거 프렌차이즈의 정석, 상대적으로 다양한 메뉴를 가지고 있다. </br>
           <span>단점 :</span> 거리가 멀다. 수제버거집이다 보니 버거킹보다 비싸다</br>
           <span> 정기휴무 :</span> 없음 `,
  },
  {
    id: 11,
    title: "양지식당 생선구이",
    category: "밥",
    price: "9,000원~",
    img: "./images/양지식당.jpeg",
    desc: `<span>메뉴 :</span> 갈치조림, 고등어조림, 고등어구이, 굴비구이, 갈치구이, 청국장, 김치찌개</br>
           <span>장점 :</span> 생선 비린내가 다른 가게에 비해 덜하고 반찬이 다양하다. 사장님이 친절하시다. </br>
           <span>단점 :</span> 거리가 멀다. 사람이 많아 기다려야 할 수 있다. 대신 음식을 미리 준비해주시고 순환율도 빠른 편이다.</br>
           <span> 정기휴무 :</span> 토요일, 일요일 별도 휴일을 인터넷에 따로 기재해주지 않기 때문에 허탕을 칠 수 있다.`,
  },
  {
    id: 12,
    title: "탄방손칼국수",
    category: "면",
    price: "7,000원~",
    img: "./images/탄방손칼국수.jpeg",
    desc: `<span>메뉴 :</span> 손칼국수, 소면콩국수</br>
           <span>장점 :</span> 저렴한 편이며 진한 콩국물로 할머니가 해주시는 진한 콩국수의 느낌을 느낄 수 있다. </br>
           <span>단점 :</span> 거리가 멀다. 진한 콩국물이 목에 걸리는 느낌이 있어 비호면 먹기 어려울 수 있다.(콩국수만 먹어봤다)</br>
           <span> 정기휴무 : </span> 일요일 거리가 멀어 자주 가지 않고 인터넷에 따로 영업일 업데이트가 되지 않아 불확실할 수 있다.`,
  },
  {
    id: 13,
    title: "부뚜막 두부마을",
    category: "밥",
    price: "8,000원~",
    img: "./images/두부마을.jpg",
    desc: `<span>메뉴 :</span> 전골류, 찌개류, 청국장 등</br>
           <span>장점 :</span> 두부를 직접 만드는 집이라 두부 좋아하면 추천하며 반찬도 많이 준다. </br>
           <span>단점 :</span> 거리가 멀다. 둘이서 가는게 속 편하고 사람이 많아 어느정도 늦을 건 각오해야 할 수도 있다</br>
           <span> 정기휴무 : </span>  일요일 `,
  },
  {
    id: 14,
    title: "전통 손 칼국수",
    category: "면",
    price: "6,000원~",
    img: "./images/손칼국수.jpg",
    desc: `<span>메뉴 :</span> 들깨칼국수, 감자탕, 콩국수(계절메뉴)</br>
           <span>장점 :</span> 전체적으로 가격이 저렴한 편이며 맛도 괜찮아 지역맛집으로 불리는 듯 하다. (개인적으로 면이 내 취향이었다) </br>
           <span>단점 :</span> 사람이 많다 구조상 여름에는 좀 더울 수 있을 듯 하다. 감자탕 소가20000원인데 뼈를 많이 안 주니 대를 시켜라 대가26000원이니 그냥 대 시켜먹으라 주민에게 들었다. </br>
           <span> 정기휴무 : </span>  일요일 `,
  },
  {
    id: 15,
    title: "탄방동 치즈&꿀호떡",
    category: "떡",
    price: "2,000원~",
    img: "./images/치즈호떡.jpg",
    desc: `<span>메뉴 :</span> 꿀호떡, 치즈호떡, 떡볶이</br>
           <span>장점 :</span> 치즈호떡에 치즈가 콘치즈라 생각보다 맛있었다. 양도 많은 편이고 커서 양이 적은 사람이면 대충 떼우기용으로도 가능할듯 한번쯤 간식으로 괜찮은듯 </br>
           <span>단점 :</span> 치즈호떡이 4000원으로 가격이 조금 있다. 바로 해 주시기 때문에 바로 먹으면 입천장 다 까질 수 있다. </br>
           <span> 정기휴무 : </span>  없음. 일요일, 목요일은 저녘7시까지, 평일은 9시까지 영업하며 영업시작은 오전11시로 동일하다. `,
  },
  {
    id: 16,
    title: "별이네밥상",
    category: "밥",
    price: "8,000원~",
    img: "./images/별이네.jpg",
    desc: `<span>메뉴 :</span> 김치찌개, 육개장, 내장탕, 동태찌개, 순두부, 뚝배기불고기 등</br>
           <span>장점 :</span> 반찬도 괜찮게 나오고 뚝불, 육개장은 괜찮았다. 가깝고 집밥땡길때 추천  </br>
           <span>단점 :</span> 냄새에 예민하면 조금 어려울 수 있다. 주방이 바로 보이는 구조지만 그에 비해 위생 신경은 조금 덜 쓰시는듯...  </br>
           <span> 정기휴무 : </span>  정보공개가 되어있지 않아 확실치 않으나 주말 제외 항상 열려있었던 것 같다. `,
  },
  {
    id: 17,
    title: "콩마당",
    category: "밥",
    price: "8,000원~",
    img: "./images/콩마당.jpg",
    desc: `<span>메뉴 :</span> 청국장, 순두부, 콩비지, 김치찌개 등</br>
           <span>장점 :</span> 반찬도 정갈하게 나오고 순두부 등 맛도 괜찮다. 콩 관련 요리 근처에서 먹을 때 추천  </br>
           <span>단점 :</span> 신호등 건너가야 하고 간판불도 안 켜져있는듯 하다. 근처에 먹을 곳이 딱히 없어 급작스러운 메뉴 변경 시 시간을 많이 소요할 수 있다.  </br>
           <span> 정기휴무 : </span>  없음 `,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// 화면에 내용 가져오는 클래스
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

// 버튼을 누르면 해당 카테고리 내용만 정렬
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
