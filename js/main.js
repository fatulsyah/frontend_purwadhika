$(document).ready(function() {
  actionMenu();
  actionColumn();

  $(".iniclass").css({
    color: "pink",
    background: "black",
    fontSize: "20px"
  });
  $("#iniid").css("color", "blue");
  $("p span").css("color", "red");

  $("#iniid").click(function(x) {
    console.log(x);
    console.log(x.currentTarget.outerHTML);
    document.getElementById("content").innerHTML = x.currentTarget.innerHTML;
    $("#content").html = x.currentTarget.innerHTML;
    document.getElementById("content").innerText = x.currentTarget.innerHTML;

    // $("#content").toggle(1000, function() {
    //   $("#iniid").css("color", "red");
    // });
  });
  $(".iniclass").on("click", function() {
    $("#content").show();
  });

  //   $(document).on("mousemove", function(pos) {
  //     console.log("X: " + pos.clientX + " Y: " + pos.clientY);
  //     if (pos.clientX >= 109 && pos.clientY >= 20)
  //       $("#content").css("margin-top", "100px");
  //     else $("#content").css("margin-top", "0px");
  //   });

  //   $("#iniid").on("mousemove", function() {
  //     $("#content").css("margin-top", "100px");
  //   });
  //   $("#iniid").on("mouseout", function() {
  //     $("#content").css("margin-top", "50px");
  //   });
});

function actionMenu() {
  var show = true;
  $("#menu").on("click", function() {
    $(".sidebar").toggle(0, function() {
      if (show) {
        $("#content").css({
          "grid-template-columns": "100%"
        });
        show = false;
      } else {
        $("#content").css({
          "grid-template-columns": "20% 80%"
        });
        show = true;
      }
    });
  });
}

function actionColumn() {
  $(".sidebar li:nth-of-type(2)").click(function() {
    $(".wrapper > div:nth-of-type(1)").toggle();
  });
  $(".sidebar li:nth-of-type(3)").click(function() {
    $(".wrapper > div:nth-of-type(2)").toggle();
  });
  $(".sidebar li:nth-of-type(4)").click(function() {
    $(".wrapper > div:nth-of-type(3)").toggle();
  });
}
