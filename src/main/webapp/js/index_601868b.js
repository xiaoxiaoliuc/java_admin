$(function () {
    $("#j-focus").slide({
        mainCell: ".list",
        titCell: ".num span",
        effect: "fade",
        interTime: 4e3,
        delayTime: 500,
        autoPlay: !0,
        startFun: function (i) {
            $("#j-focus").find(".left-img").css({left: -758}), $("#j-focus").find(".right-img").css({
                right: 260,
                opacity: 0
            });
            var e = $("#j-focus").find("li").eq(i);
            e.find(".left-img").animate({left: 186}, 500, function () {
                e.find(".right-img").animate({right: 210, opacity: 1}, 500)
            })
        }
    }), $(".j-slider").slide({
        mainCell: ".list",
        titCell: ".num span",
        effect: "leftLoop",
        delayTime: 500,
        autoPlay: !0
    }), $(".j-footSlide").slide({
        mainCell: ".list",
        effect: "fade",
        delayTime: 1e3,
        autoPlay: !0
    }), $("#j-dgdongtai").slide({
        mainCell: ".list",
        effect: "topLoop",
        vis: 9,
        autoPlay: !0
    }), $(".j-rcdBox").slide({
        mainCell: "ul",
        effect: "leftLoop",
        delayTime: 500,
        autoPlay: !0,
        titCell: ".num span",
        vis: 1
    }), $(".j-shareBox").slide({mainCell: ".bd ul", effect: "leftLoop", vis: 4, autoPlay: !0, easing: "swing"});
    var i = "Microsoft Internet Explorer";
    navigator.appName == i && ($(".j-diylist .box2").hide(), $(".j-diylist li").hover(function () {
        $(this).addClass("isie")
    }, function () {
        $(this).removeClass("isie")
    }))
}), !function (i, e) {
    function t() {
        var e = i(document).scrollTop();
        e <= a[1] - s ? (l.css({
            position: "absolute",
            top: a[1] + 16
        }), l.find("li").removeClass("active")) : e > a[1] - s && e < a[6] + n ? l.css({
            position: "fixed",
            top: s
        }) : e >= a[6] + n && (l.find("li").removeClass("active"), l.css({
            position: "absolute",
            top: a[6] + o - 13
        })), e > a[1] - s && e < a[2] - s ? l.find("li").removeClass("active").eq(0).addClass("active") : e > a[2] - s && e < a[3] - s ? l.find("li").removeClass("active").eq(1).addClass("active") : e > a[3] - s && e < a[4] - s ? l.find("li").removeClass("active").eq(2).addClass("active") : e > a[4] - s && e < a[5] - s ? l.find("li").removeClass("active").eq(3).addClass("active") : e > a[5] - s && e < a[6] - s ? l.find("li").removeClass("active").eq(4).addClass("active") : e > a[6] - s && e < a[6] + n && l.find("li").removeClass("active").eq(5).addClass("active")
    }

    var a = [], l = i(".f-nav"), s = 200, o = parseFloat(i(".ind-f6").height()) - parseFloat(l.height()), n = o - s;
    setTimeout(function () {
        for (var e = 1; 6 >= e; e++) a[e] = i(".ind-f" + e).offset().top
    }, 0), i(e).scroll(function () {
        t()
    }), l.on("click", "li", function () {
        var e = i(this).index() + 1;
        i("html,body").animate({scrollTop: a[e]}, 600), t()
    }), t()
}(jQuery, window);