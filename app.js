// const currentLocation = location.href;
// const menuItem = document.querySelectorAll("a");
// const menuLenght = menuItem.length;
// for (let i = 0; i < menuLenght; i++) {
//   if (menuItem[i].href == currentLocation) {
//     menuItem[i].className = "active";
//   }
// }
// console.log(menuLength);
// $(document).ready(function () {
//   $(".submenu > a").click(function (e) {
//     e.preventDefault();
//     var $li = $(this).parent("li");
//     var $ul = $(this).next("ul");

//     if ($li.hasClass("open")) {
//       $ul.slideUp(350);
//       $li.removeClass("open");
//     } else {
//       $(".nav > li > ul").slideUp(350);
//       $(".nav > li").removeClass("open");
//       $ul.slideDown(350);
//       $li.addClass("open");
//     }
//   });
// });
let list = document.querySelectorAll(".one");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
