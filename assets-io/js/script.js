$(document).ready(function () {
  $("#container").on("wheel DOMMouseScroll touchmove scroll", function (e) {
    e.preventDefault();
  });
  $("#button-buka").on("click", function () {
    let element = `
        <div style="width: 100vw;height:100vh;background-color: rgba(0, 0, 0, 0.689);position: absolute;z-index: 100000;display: flex;flex-direction: column;color:white;" id="card-info" class="animate__animated animate__fadeIn">
            <div class="atas">
                Klik bagian ini untuk geser ke atas
            </div>
            <div class="bawah">
                Klik bagian ini untuk geser ke bawah
            </div>
        </div>
        `;
    $("#landing").addClass("animate__animated animate__fadeOut animate__slow");
    $("#container-rap").addClass(
      "animate__animated animate__fadeOut animate__slow"
    );
    setTimeout(function () {
      $("#landing").css({ display: "none" });
      $("#container-rap").css({ display: "none" });
      // scrollMobile()
      // $("#info").html(element)
    }, 1000);
    // setTimeout(() => {
    //     $("body #card-info").removeClass("animate__fadeIn")
    //     $("body #card-info").addClass("animate__fadeOut")
    // }, 3500);
    // setTimeout(() => {
    //     $("#info").remove()
    //     $("#navigation").html(`
    //         <div id="nav-top"></div>
    //         <div id="nav-bot"></div>
    //         `)
    // }, 3600);
  });
  // $("body").on("click", "#nav-bot" ,function(){
  //     alert("oke")
  // })
  //   $("#waktu-info").on("wheel DOMMouseScroll touchmove", function (e) {
  //     var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  //     // Memeriksa apakah scroll ke bawah
  //     if (delta < 0) {
  //       e.preventDefault(); // Mematikan scroll ke bawah
  //       // Menghitung posisi scroll saat ini dan posisi scroll tujuan
  //       var scrollPosition = $(window).scrollTop();
  //       var targetPosition = scrollPosition + $(window).height(); // 100vh ke bawah

  //       // Menggunakan animasi scroll ke posisi target
  //       $("html, body").animate(
  //         {
  //           scrollTop: targetPosition,
  //         },
  //         100
  //       ); // Durasi animasi dalam milidetik
  //     }
  //   });
  //   $("#waktu-info").on("touchmove", function (e) {
  //     // Mendapatkan posisi sentuh
  //     var touch = e.originalEvent.touches[0];
  //     var currentY = touch.clientY;

  //     // Menyimpan posisi sentuh sebelumnya
  //     if (typeof lastY !== "undefined") {
  //       // Memeriksa apakah scroll ke atas
  //       if (currentY < lastY) {
  //         e.preventDefault(); // Mematikan scroll ke bawah
  //         document.location.href = "#container-rap-3";
  //       }
  //     }

  //     // Mengupdate posisi sentuh terakhir
  //     lastY = currentY;
  //   });
  //   $("#waktu-info").on("wheel DOMMouseScroll touchmove", function (e) {
  //     var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  //     // Memeriksa apakah scroll ke bawah
  //     if (delta < 0) {
  //       e.preventDefault(); // Mematikan scroll ke bawah
  //       // Menghitung posisi scroll saat ini dan posisi scroll tujuan
  //       var scrollPosition = $(window).scrollTop();
  //       var targetPosition = scrollPosition + $(window).height(); // 100vh ke bawah

  //       // Menggunakan animasi scroll ke posisi target
  //       $("html, body").animate(
  //         {
  //           scrollTop: targetPosition,
  //         },
  //         100
  //       ); // Durasi animasi dalam milidetik
  //     }
  //   });
  //   $("#waktu-info").on("touchmove", function (e) {
  //     // Mendapatkan posisi sentuh
  //     var touch = e.originalEvent.touches[0];
  //     var currentY = touch.clientY;

  //     // Menyimpan posisi sentuh sebelumnya
  //     if (typeof lastY !== "undefined") {
  //       // Memeriksa apakah scroll ke atas
  //       if (currentY < lastY) {
  //         e.preventDefault(); // Mematikan scroll ke bawah
  //         document.location.href = "#container-rap-3";
  //       }
  //     }

  //     // Mengupdate posisi sentuh terakhir
  //     lastY = currentY;
  //   });
  //   $("#mempelai-wanita").on("wheel DOMMouseScroll touchmove", function (e) {
  //     var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  //     // Memeriksa apakah scroll ke bawah
  //     if (delta > 0) {
  //       e.preventDefault(); // Mematikan scroll ke bawah
  //       // Menghitung posisi scroll saat ini dan posisi scroll tujuan
  //       var scrollPosition = $(window).scrollTop();
  //       var targetPosition = scrollPosition - $(window).height(); // 100vh ke bawah

  //       // Menggunakan animasi scroll ke posisi target
  //       $("html, body").animate(
  //         {
  //           scrollTop: targetPosition,
  //         },
  //         100
  //       ); // Durasi animasi dalam milidetik
  //     }
  //     if (delta < 0) {
  //       e.preventDefault(); // Mematikan scroll ke bawah
  //       // Menghitung posisi scroll saat ini dan posisi scroll tujuan
  //       var scrollPosition = $(window).scrollTop();
  //       var targetPosition = scrollPosition + $(window).height(); // 100vh ke bawah

  //       // Menggunakan animasi scroll ke posisi target
  //       $("html, body").animate(
  //         {
  //           scrollTop: targetPosition,
  //         },
  //         100
  //       ); // Durasi animasi dalam milidetik
  //     }
  //   });
  //   $("#mempelai-wanita").on("touchmove", function (e) {
  //     // Mendapatkan posisi sentuh
  //     var touch = e.originalEvent.touches[0];
  //     var currentY = touch.clientY;

  //     // Menyimpan posisi sentuh sebelumnya
  //     if (typeof lastY !== "undefined") {
  //       // Memeriksa apakah scroll ke atas
  //       if (currentY > lastY) {
  //         e.preventDefault(); // Mematikan scroll ke bawah
  //         document.location.href = "#container-rap-4";
  //       }
  //     }

  //     // Mengupdate posisi sentuh terakhir
  //     lastY = currentY;
  //   });
  // $('#mempelai-pria').on('wheel DOMMouseScroll touchmove', function (e) {
  //     var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

  //     // Memeriksa apakah scroll ke bawah
  //     if (delta > 0) {
  //         e.preventDefault(); // Mematikan scroll ke bawah
  //         // Menghitung posisi scroll saat ini dan posisi scroll tujuan
  //         var scrollPosition = $(window).scrollTop();
  //         var targetPosition = scrollPosition - $(window).height(); // 100vh ke bawah

  //         // Menggunakan animasi scroll ke posisi target
  //         $('html, body').animate({
  //             scrollTop: targetPosition
  //         }, 100); // Durasi animasi dalam milidetik
  //     }
  // });
  // $("#mempelai-wanita").on('touchmove', function (e) {
  //     // Mendapatkan posisi sentuh
  //     var touch = e.originalEvent.touches[0];
  //     var currentY = touch.clientY;

  //     // Menyimpan posisi sentuh sebelumnya
  //     if (typeof lastY !== 'undefined') {
  //         // Memeriksa apakah scroll ke atas
  //         if (currentY > lastY) {
  //             e.preventDefault(); // Mematikan scroll ke bawah
  //             document.location.href = "#container-rap-3"
  //         }
  //     }

  //     // Mengupdate posisi sentuh terakhir
  //     lastY = currentY;
  // });
  let mempelaiWanita = toTop("#mempelai-wanita");
  let mempelaiPria = toTop("#mempelai-pria");
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll);
    //Portpolio

    if (wScroll > mempelaiWanita) {
      for (let x = 1; x <= 6; x++) {
        $("#text-wanita-" + x).css({
          display: "block",
        });
        $("#text-wanita-" + x).addClass(
          "animate__animated animate__slideInUp animate__fadeIn"
        );
      }
      if (wScroll > mempelaiPria) {
        for (let x = 1; x <= 6; x++) {
          $("#text-pria-" + x).css({
            display: "block",
          });
          $("#text-pria-" + x).addClass(
            "animate__animated animate__slideInUp animate__fadeIn"
          );
        }
      }
    }
  });
  function toTop(element) {
    // Mendapatkan semua elemen dalam dokumen
    const elements = document.querySelector(element);

    // Mendapatkan jarak elemen dari bagian atas window
    const distanceFromTop = elements.getBoundingClientRect().top;
    return distanceFromTop;
  }
});

// COUNT DOWN
// Atur waktu akhir hitung mundur (YYYY/MM/DD HH:MM:SS)
let tanggal = document.getElementById("tanggal_akad_db").value;
let waktu = document.getElementById("waktu_akad_db").value;
let waktuResepsi = document.getElementById("waktu_resepsi_db").value;
let waktuResepsiBaru = waktuResepsi.split(":");
let waktuBaru = waktu.split(":");
let tanggalBaru = tanggal.split("-").join("/");
var countDownDate = new Date(tanggalBaru + " " + waktu).getTime();

// Update hitung mundur setiap 1 detik
var x = setInterval(function () {
  // Dapatkan tanggal dan waktu saat ini
  var now = new Date().getTime();

  // Hitung selisih waktu antara sekarang dan waktu akhir hitung mundur
  var distance = countDownDate - now;

  // Hitung waktu dalam hari, jam, menit, dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hitung mundur dalam elemen HTML yang ditentukan
  document.getElementById("cd-hari").innerHTML = days;
  document.getElementById("cd-jam").innerHTML = hours;
  document.getElementById("cd-menit").innerHTML = minutes;
  document.getElementById("cd-detik").innerHTML = seconds;

  // Jika hitung mundur selesai, hentikan hitung mundur
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "Waktu hitung mundur sudah berakhir!";
    document.getElementById("countdown").classList.add("text-center");
  }
}, 1000);

// document.getElementById("waktuBaru").innerHTML =
//   waktuBaru[0] + ":" + waktuBaru[1];
// document.getElementById("waktu_res").innerHTML =
//   waktuResepsiBaru[0] + ":" + waktuResepsiBaru[1];
