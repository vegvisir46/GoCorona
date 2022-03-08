(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let nightModeIcon = document.getElementById("nightModeIcon");
    nightModeIcon.onclick = function() {
        document.body.classList.toggle("nightMode");
        if (document.body.classList.contains("nightMode")) nightModeIcon.src = "img/icons/sun.svg"; else nightModeIcon.src = "img/icons/moon.svg";
    };
    window.onscroll = function() {
        scrollFunction();
    };
    function scrollFunction() {
        if (document.body.classList.contains("nightMode")) if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.background = "rgb(54, 54, 54)";
            document.getElementById("headerCont").style.height = "60px";
        } else {
            document.getElementById("navbar").style.background = "none";
            document.getElementById("headerCont").style.height = "114px";
        } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.background = "white";
            document.getElementById("headerCont").style.height = "60px";
        } else {
            document.getElementById("navbar").style.background = "none";
            document.getElementById("headerCont").style.height = "114px";
        }
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.background = "--backgroundColor";
            document.getElementById("headerCont").style.height = "60px";
        } else {
            document.getElementById("navbar").style.background = "none";
            document.getElementById("headerCont").style.height = "114px";
        }
    }
    document.getElementById("burger").onclick = function() {
        document.getElementById("burger").classList.toggle("active");
        document.getElementById("menu").classList.toggle("active");
        document.body.classList.toggle("lock");
    };
    const script_anchors = document.querySelectorAll('a[href*="#"]');
    const burger = document.getElementById("burger");
    for (let anchor of script_anchors) anchor.addEventListener("click", (function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        if (burger.classList.contains("active")) {
            document.getElementById("burger").classList.toggle("active");
            document.getElementById("menu").classList.toggle("active");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();