const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  listItem = body.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

// let list = document.querySelectorAll(".one");
for (let i = 0; i < listItem.length; i++) {
  listItem[i].onclick = function () {
    let j = 0;
    while (j < listItem.length) {
      listItem[j++].className = "list";
    }
    listItem[i].className = "list active";
  };
}
