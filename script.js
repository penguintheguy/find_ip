$.getJSON("https://api.ipify.org/?format=json", function (e) {
    var result = e.ip;

    $.getJSON("https://api64.ipify.org/?format=json", function (f) {
        var result2 = f.ip;

        $("button").on("click", function () {
            $("ins#v4").html("Your IPv4 address is: " + result);
            $("ins#v6").html("Your IPv6 address is: " + result2);
        });
    });
});
