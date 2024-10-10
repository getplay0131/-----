// DOM 요소 참조
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sideNav = document.getElementById("sideNav");
  const scrollTop = document.getElementById("scrollTop");

  // 네비게이션 메뉴에 활성화 제어
  function toggleNav() {
    // 네비게이션 메뉴에 해당 클래스명을 토글한다.
    sideNav.classList.toggle("open");
    // 조건문을 이용하여 해당 네비게이션이 해당 클래스가 있는지 확인후
    if (sideNav.classList.contains("open")) {
      // 참이라면 내용을 해당 내용으로 변경
      menuToggle.textContent = "close";
      // 거짓일시
    } else {
      // 거짓시 내용을 해당 내용으로 변경
      menuToggle.textContent = "menu";
    }
  }

  // 메뉴가 토글되면 해당 함수를 호출한다.
  menuToggle.addEventListener("click", toggleNav);

  // 내비게이션 메뉴 항목 클릭 시 메뉴 닫기
  const navItems = sideNav.querySelectorAll("li");
  // 해당 요소가 클릭되면, 배열 메소드를 이용하여 이벤트 리스너를 이용해 해당 함수를 호출한다.
  navItems.forEach((item) => {
    item.addEventListener("click", toggleNav);
  });

  // 스크롤 탑 버튼 기능
  scrollTop.addEventListener("click", function () {
    // 윈도우에서 해당 위치로 이동시키는 메소드를 이용하여 해당 값을 지정하여 이동한다.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 화면 크기 변경 시 메뉴 닫기
  window.addEventListener("resize", function () {
    // 조건문을 이용하여, 너비가 해당 너비 이상이고, 네비게이션의 해당 클래스 명이 있다면
    if (window.innerWidth > 768 && sideNav.classList.contains("open")) {
      // 해당 함수를 호출한다.
      toggleNav();
    }
  });
});
