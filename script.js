document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sideNav = document.getElementById("sideNav");
  const scrollTop = document.getElementById("scrollTop");

  function toggleNav() {
    sideNav.classList.toggle("open");
    if (sideNav.classList.contains("open")) {
      menuToggle.textContent = "close";
    } else {
      menuToggle.textContent = "menu";
    }
  }

  menuToggle.addEventListener("click", toggleNav);

  // 내비게이션 메뉴 항목 클릭 시 메뉴 닫기
  const navItems = sideNav.querySelectorAll("li");
  navItems.forEach((item) => {
    item.addEventListener("click", toggleNav);
  });

  // 스크롤 탑 버튼 기능
  scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 화면 크기 변경 시 메뉴 닫기
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && sideNav.classList.contains("open")) {
      toggleNav();
    }
  });
});
