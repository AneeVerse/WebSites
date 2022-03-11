$(function() {
    function l() {
        for (var n = 0; n <= r; n++)
            e += '<li><a href="#">' + (n + 1) + "<\/a><\/li>";
        $("#slides").after(s + e + h)
    }
    function a() {
        var i = $(this).index();
        $("#slides li").eq(n).css("z-index", "9");
        $("#slides li").eq(i).css({
            "z-index": "8"
        }).show();
        t.eq(i).addClass("current").siblings("li").removeClass("current");
        $("#slides li").eq(n).fadeOut(400, function() {
            $("#slides li").eq(i).fadeIn(500)
        });
        n = i
    }
    function o() {
        var e = n + 1;
        i == 1 || (n < r ? ($("#slides li").eq(n).css("z-index", "9"),
        $("#slides li").eq(e).css({
            "z-index": "8"
        }).show(),
        t.eq(e).addClass("current").siblings("li").removeClass("current"),
        $("#slides li").eq(n).fadeOut(400, function() {
            $("#slides li").eq(e).fadeIn(500)
        }),
        n += 1) : (e = 0,
        $("#slides li").eq(n).css("z-index", "9"),
        $("#slides li").eq(e).stop(!0, !0).css({
            "z-index": "8"
        }).show(),
        $("#slides li").eq(n).fadeOut(400, function() {
            $("#slides li").eq(0).fadeIn(500)
        }),
        t.eq(e).addClass("current").siblings("li").removeClass("current"),
        n = 0));
        u = setTimeout(o, f)
    }
    var r = $("#slides li").size() - 1, n = 0, i = 0, u = 0, f = 5e3, t, c;
    $("#slides li").eq(0).siblings("li").css({
        display: "none"
    });
    var s = '<ul id="pagination">'
      , e = ""
      , h = "<\/ul>";
    l();
    t = $("#pagination li");
    c = $("#pagination").width();
    t.eq(0).addClass("current");
    t.on("click", a);
    t.mouseenter(function() {
        i = 1
    });
    t.mouseleave(function() {
        i = 0
    });
    u = setTimeout(o, f)
})
