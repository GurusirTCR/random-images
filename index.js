$(window).on("load", function () {
  getData();
});

$(function () {
  $(".apply").click(getData);
});

function getData() {
  $(".show_images").html("");
  $("#row-data").html("");
  var newWidth = $(".width").val();

  $(".show_images").width(newWidth);

  var photos = $("#photos").val();

  const screenWidth = screen.width - 20;

  if (
    newWidth <= 50 ||
    (newWidth >= screenWidth && photos <= 1) ||
    photos >= 30
  ) {
    alert("Not Valid input");
    location.reload();
  }

  const ImageAPI = "https://randomuser.me/api/?results=" + photos;

  var imageInBox = parseInt(newWidth / 50);

  var flag = 1;
  console.log(imageInBox);

  $.getJSON(ImageAPI).done(function (data) {
    for (var i = 0; i < photos; i++) {
      // console.log(data.results[i].picture.medium);

      var resultData = data.results[i];
      var img = resultData.picture.medium;

      if (photos == imageInBox ) {
        $("#image-show").append(`<img class="user-img" src="${img}" alt="">`);
        flag++;
      }
    
      if (photos > imageInBox && newWidth % 50 != 0) {
        var total = photos - imageInBox;
        for (var i = 0; i < imageInBox - 1; i++) {
          var data1 = data.results[i];
          var img = data1.picture.medium;
         
          $("#image-show").append(`<img class="user-img" src="${img}" alt="">`);
          
          flag++;
        }
        $("#image-show").append(
          `<button type="button" class="user-img" onclick="demo()" id="trigger" >+${parseInt(
            total + 1
          )}</button>`
        );
          break;
        
      }
    
    }
    console.log(flag);
    var user_images = new Array();
    for (var k = 0; k < photos; k++) {
      var data1 = data.results[k];
      user_images.push(data1);
    }

    for (var k = flag - 1; k < photos; k++) {
      $("#row-data").append(
        `
        <div class="user-img-div">
        <img class="user-img" src="${user_images[k].picture.medium}">
        </div>
        `
      );
      $("#row-data").append(` <div class="name">
        <h4>${user_images[k].name.first}</h4>
        </div>`);
    }
  });
}

function demo() {
  console.log("Demo Function");

  const trigger = document.querySelector("#trigger");
  const modalWrapper = document.querySelector(".modal_wrapper");
  const closeBtn = document.querySelector(".close");

  trigger.addEventListener("click", function () {
    modalWrapper.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    modalWrapper.classList.remove("active");
  });
}
