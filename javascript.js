function changeDotColorDocs() {
    var selectedValue = document.getElementById("docs").value;

    if (selectedValue === "0") {
        document.getElementById("dot-d-js1").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-d-js2").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-d-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-docs").innerHTML = "0";
        document.getElementById('docs-js').innerHTML= "";
    } else if (selectedValue === "1") {
        document.getElementById("dot-d-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-d-js2").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-d-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-docs").innerHTML = "75";
        document.getElementById('docs-js').innerHTML= "Google Slides LV1";
    } else if (selectedValue === "2") {
        document.getElementById("dot-d-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-d-js2").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-d-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-docs").innerHTML = "150";
        document.getElementById('docs-js').innerHTML= "Google Slides LV2";
    } else if (selectedValue === "3") {
        document.getElementById("dot-d-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-d-js2").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-d-js3").style.backgroundColor = "#00DBB6";
        document.getElementById("price-docs").innerHTML = "225";
        document.getElementById('docs-js').innerHTML= "Google Slides LV3";

    }
    priceDoc = parseInt(document.getElementById('price-docs').innerHTML);
  updateTotal();
}

function changeDotColorSlides() {
    var selectedValue = document.getElementById("slides").value;

    if (selectedValue === "0") {
        document.getElementById("dot-s-js1").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js2").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js4").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-slides").innerHTML = "0";
         document.getElementById("slides-js").innerHTML = "";
    } else if (selectedValue === "1") {
        document.getElementById("dot-s-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js2").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js4").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-slides").innerHTML = "120";
        document.getElementById("slides-js").innerHTML = "Google Slides LV1";
    } else if (selectedValue === "2") {
        document.getElementById("dot-s-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js2").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js3").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("dot-s-js4").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-slides").innerHTML = "240";
        document.getElementById("slides-js").innerHTML = "Google Slides LV2";
    } else if (selectedValue === "3") {
        document.getElementById("dot-s-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js2").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js3").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js4").style.backgroundColor = "rgb(160, 160, 160)";
        document.getElementById("price-slides").innerHTML = "360";
        document.getElementById("slides-js").innerHTML = "Google Slides LV3";
    } else if (selectedValue === "4") {
        document.getElementById("dot-s-js1").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js2").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js3").style.backgroundColor = "#00DBB6";
        document.getElementById("dot-s-js4").style.backgroundColor = "#00DBB6";
        document.getElementById("price-slides").innerHTML = "480";
        document.getElementById("slides-js").innerHTML = "Google Slides LV4";
    }
    priceSlid = parseInt(document.getElementById('price-slides').innerHTML);
  updateTotal();
}


var priceDoc = parseInt(document.getElementById('price-docs').innerHTML);
var priceSlid = parseInt(document.getElementById('price-slides').innerHTML);

function updateTotal() {
  var total = priceDoc + priceSlid;
  var tax  = total * 0.07;
  var total2 = tax + total;
  document.getElementById('to-price').innerHTML = "THB" + total2.toFixed(2) + " + tax 7%";
  document.getElementById('price').innerHTML = "THB " + total;
}

updateTotal();



document.addEventListener("DOMContentLoaded", function () {
    // เลือกการ์ดโดยใช้ ID
    var delayShow = document.getElementById("delayshow");
  
    // กำหนดเวลาที่ต้องการให้แสดงต่อไป
    var delay = 1000; // 1 วินาที
  
    // แสดงการ์ดทีละหนึ่งตัวทุก 1 วินาที
    setInterval(function () {
      // เปลี่ยน opacity เพื่อแสดงการ์ด
      delayShow.style.opacity = "1";
  
    }, delay);
  });
  

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "container-nav") {
      x.className += " responsive";
    } else {
      x.className = "container-nav";
    }
}

