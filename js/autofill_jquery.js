$("#name").keyup(function () {
    var names = new Array(
        "程创艺", "崔士磊",
        "高明明", "苟正科",
        "郭天行", "靳开颜",
        "鞠博闻", "柯冠州",
        "寇景玥", "李大钰",
        "李家伟", "李井瑞",
        "刘斌", "刘振远",
        "柳贝涵", "柳明旭",
        "吕淋焰", "马怿晟",
        "梅笑寒", "彭凯",
        "戚鹤立", "戚温伦",
        "盛鹏昆", "舒意恒",
        "王博涵", "王浩鑫",
        "王婧怡", "王文杰",
        "王兴坤", "王重阳",
        "韦韩", "魏奕洁",
        "闫庭昀", "于亮亮",
        "张航", "张舜波",
        "张羽嫣", "郑云霞");
    var numbers = new Array("20165027", "20154983",
        "20165152", "20162443", "20165082", "20165058",
        "20165059", "20165355", "20165056", "20165147",
        "20163295", "20164965", "20165157", "20164966",
        "20155063", "20164913", "20164905", "20165019",
        "20165008", "20164963", "20165141", "20165021",
        "20164932", "20165248", "20164943", "20165109",
        "20164964", "20154828", "20165336", "20165326",
        "20165242", "20165148", "20165170", "20164995",
        "20165225", "20164998", "20164979", "20165369");

    var index = $.inArray($("#name").val(), names)
    if (index != -1) {
        $("#number").val(numbers[index]);
    } else {
        $("#number").val(null);
    }
});
var i = 0;
$(window).resize(function () {
    if ($(window).width() < 768) {
        $(".note").css("display", "none");
        $("input").focus(function () {
            $(this).parents(".row").find(".note").slideDown("slow");
        });
        $("input").blur(function () {
            $(this).parents(".row").find(".note").slideUp("slow");
        });
    } else {
        $(".note").css("display", "block");
        $("input").unbind();
    }
});

function addcompe() {
    i++;
    $("#com").append("<div id='compe" + i + "' class='com added'>" +
        "<div class='row'>" +
        "    <div class='col-md-offset-3 col-md-6 col-sm-12'>" +
        "        <div class='form-group'>" +
        "            <div class='input-group compeg'>" +
        "                <input type='text' class='form-control compe' name='compeName" + i + "' required='required'  placeholder='比&nbsp&nbsp赛&nbsp&nbsp名&nbsp&nbsp称'>" +
        "                <span class='input-group-btn'>" +
        "                            <button class='btn btn-default del' id='bbb' type='button' >-</button>" +
        "                    </span>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
        "<div class='row'>" +
        "    <div class='col-md-offset-3 col-md-6 col-sm-12'>" +
        "        <div class='form-group'>" +
        "            <input type='text' class='form-control nom' name='compeAward" + i + "' required='required'" +
        "                   placeholder='获&nbsp&nbsp奖&nbsp&nbsp等&nbsp&nbsp级'>" +
        "            <i class='fa fa-cubes'></i>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
        "<div class='row'>" +
        "    <div class='col-md-offset-3 col-md-6 col-sm-12'>" +
        "        <div class='form-group'>" +
        "            <input type='text' class='form-control nom' name='compeLevel" + i + "' required='required'" +
        "                   placeholder='比&nbsp&nbsp赛&nbsp&nbsp级&nbsp&nbsp别'>" +
        "            <i class='fa'>L</i>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
        "<div class='row'>" +
        "    <div class='col-md-offset-3 col-md-6 col-sm-12'>" +
        "        <div class='form-group'>" +
        "            <input type='text' class='form-control nom' name='compeOrg" + i + "' required='required'" +
        "                   placeholder='颁&nbsp&nbsp奖&nbsp&nbsp单&nbsp&nbsp位'>" +
        "            <i class='fa fa-apple'></i>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
        "<div class='row'>" +
        "    <div class='col-md-offset-3 col-md-6 col-sm-12'>" +
        "        <div class='form-group'>" +
        "            <input type='text' class='form-control nom' name='compeTeacher" + i + "' required='required'" +
        "                   placeholder='指&nbsp&nbsp导&nbsp&nbsp教&nbsp&nbsp师'>" +
        "            <i class='fa fa-user-circle-o'></i>" +
        "        </div>" +
        "    </div>" +
        "</div>" +
        "<hr /></div>"
    );
    $(".added").css("display", "none");
    $(".added").slideDown("slow");
    $(".del").click(function () {
        var div = $(this).parents(".com");
        div.slideUp("slow");
        setTimeout(function () {
            div.remove();
        }, 800);
    });
}
