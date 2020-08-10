$(function () {
    "use strict";
    // Toggle SideBar
    $(".toggle-sidebar").on("click", function () {
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });

    // Toggle Submenu
    $(".toggle-submenu").on("click", function () {
        $(this)
            .find(".fa-angle-right")
            .toggleClass("down");
        $(this)
            .next(".child-links")
            .slideToggle();
    });

    // Open / Close FullScreen Mode
    $(".toggle-fullscreen").on("click", function () {
        $(this).toggleClass("full-screen");
        if ($(this).hasClass("full-screen")) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    });

    // Toggle Settings Box
    $(".toggle-settings").on("click", function () {
        $(this)
            .find("i")
            .toggleClass("fa-spin");
        $(".settings-box").toggleClass("hide-settings");
    });
    // Switch Colors Theme
    var themesClasses = [];
    $(".color-options li").each(function () {
        themesClasses.push($(this).data("theme"));
    });
    $(".color-options li").on("click", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $("body")
            .removeClass(themesClasses.join(" "))
            .addClass($(this).data("theme"));
    });

    // Switch Page Font
    var fontsclasses = [];
    $(".font-options select option").each(function () {
        fontsclasses.push($(this).val());
    });
    $(".font-options select").on("change", function () {
        $("body").removeClass(fontsclasses.join(" ")).addClass($(this).find("option:selected").val());
    });
});

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}

