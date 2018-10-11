$(document).ready(function() {
  actionMenu();
  actionColumn();
  getScrollTop();

  submitFormRegister();

  setTimeout(function() {
    $("#form-title").removeClass("red");
  }, 1000);

  $("#form-title").click(function() {
    $(this).toggleClass("red");
    $(this).text("Judul Baru");
    // const isRed = $(this).hasClass("red");

    // if (isRed) $(this).removeClass("red");
    // else $(this).addClass("red");
  });

  $(".sidebar").click(function() {
    // $("ul").append('<li><a href="#">List 4</a></li>');
    // $("ul").prepend('<li><a href="#">Main Menu</a></li>');
    // $("div.sidebar li:nth-child(2)").before(
    //   '<li><a href="#">List Middle</a></li>'
    // );
    $("ul").empty();
    $("ul").detach();
  });

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
        $("body").addClass("greyBackground");
        show = false;
      } else {
        $("#content").css({
          "grid-template-columns": "20% 80%"
        });
        $("body").removeClass("greyBackground");
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

function getScrollTop() {
  $(document).scroll(function() {
    const scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 100) {
      console.log("Scroll Top > 100");
    }
  });
}

const column = `<div class="col-4">
<h3>Kolom Appended</h3>
<input id="text" type="text" />
<p>Mesin pencari internet, baik itu Google Search maupun Bing dan lainnya dirancang untuk memuat segala
    macam informasi. Mulai dari berita (baik fakta maupun hoax) sampai ke kumpulan lagu-lagu berformat
    mp3. Karena algoritma yang dipakai adalah berdasarkan kata kunci yang umum, mesin pencari seperti
    ini tidak bisa menelusuri sebuah permintaan khusus. Seperti untuk mencari set data.</p>
  </div>`;

function submitFormRegister() {
  $("form.form-wrapper").submit(function(e) {
    e.preventDefault();

    const fullname = $('input[name="fullname"]').val();
    const age = $('input[name="age"]').val();
    const sex = $('select[name="sex"]').val();
    let result = "";

    result += "<p>Nama Lengkap: " + fullname + "</p>";
    result += "<p>Usia: " + age + "</p>";
    result += "<p>Jenis Kelamin: " + sex + "</p>";

    // es6 format
    // `<p>Nama Lengkap: ${fullname}</p>`

    $("#submit-result").html(result);
    $(".para1").appendTo(".para2");

    $(".wrapper").append(column);
    $(".wrapper > div:nth-of-type(2)").append(column);
  });
}
