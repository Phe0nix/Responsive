$(function () {
            $(".one,.two,.three,.four,.four1").hide();
        })
        $(function () {
            $(".back").click(function () {
                $(".one,.two,.three,.four,.four1").toggle(100);
            });
        });
        $(function () {
            $(".one").click(function () {
                $(".screen").css({
                    background: "cadetblue",
                    transition: "0.2s ease-in"
                });
                $("p").show(100);
            });
            $(".two").click(function () {
                $(".screen").css({
                    background: "red",
                    transition: "0.2s ease-in"
                });
                $("p").show(100);
            });
            $(".three").click(function () {
                $(".screen").css({
                    background: "url(http://cdn1-www.comingsoon.net/assets/uploads/gallery/batman-v-superman-dawn-of-justice-1400694960/bvsquad2.jpg) center",
                    "background-size": "cover",
                    transition: "0.2s ease-in"
                });
                $("p").hide(100);
            });
            $(".four").click(function () {
                $(".screen").css({
                    animation: "pranab 4s infinite alternate",
                    transition: "0.2s ease-in"
                });
                $("p").show(100);
            });
            $(".four1").click(function () {
                $(".screen").css({
                    background: "url(http://freebeacon.com/wp-content/uploads/2014/07/marvel-logo-gif.gif) center",
                    "background-size": "cover",
                    transition: "0.2s ease-in"
                });
                $("p").hide(100);
            });
            $(".four2").click(function () {
                $(".screen").css({
                    background: "url(http://cdn.makeagif.com/media/5-19-2015/vWu4q_.gif) center",
                    "background-size": "cover",
                    transition: "0.2s ease-in"
                });
                $("p").hide(100);
            });
        });