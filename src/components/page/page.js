import "./page.scss"

import "../subscription/subscription.scss"
import "../logo/logo.scss"
import "../header/header.scss"
import "../arrow/arrow.scss"
import "../form/form.js"

import "../../favicons/favicons.js"

var $content = $(".content");
var $header = $(".header__content");

$(".header__menu").click(function() {
  $content.toggleClass("content_shifted");
  $header.toggleClass("header__content_shifted");
});

window.addEventListener("touchmove", function () {
  $content.removeClass("content_shifted");
  $header.removeClass("header__content_shifted");
});