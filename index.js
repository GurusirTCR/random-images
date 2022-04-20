window.onload = function () {
  var newWidth = $(".width").val();
  $(".show_images").width(newWidth);
};
$(document).ready(function () {
  $(".apply").click(function () {
    // var demo = $("#image-show").width();
    // +"px";
    var newWidth = $(".width").val();
    $(".show_images").width(newWidth);
    demo = $("#image-show").width();

    +"px";
    var photos = $("#photos").val();

    const screenWidth = screen.width - 20;

    if (newWidth <= 50 || newWidth >= screenWidth || photos < 1) {
      alert("Not Valid input");
      location.reload();
    } else {
      $.ajax({
        url: "https://randomuser.me/api/?results=" + photos,
        dataType: "json",
        success: function (data) {
          console.log(data.results[0]);
          var newimg1 = newWidth / 50;
          console.log(newimg1);
          $(".show_images").html("");

          var user_images = new Array();
          for(var k=0;k< photos;k++)
          { 
            var data1 = data.results[k];
            user_images.push(data1);
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
//====================================
          for (var i = 0; i < photos; i++) {
            var data1 = data.results[i];
            var img = data1.picture.medium;
            if (photos == newimg1) {
              $("#image-show").append(
                `<img class="user-img" src="${img}" alt="">`
              );
              
            } else {
              const total = photos - newimg1;
              if (newWidth % 50 != 0) {
                for (var i = 0; i < newimg1 - 2; i++) {
                  var data1 = data.results[i];
                  var img = data1.picture.medium;
                  $("#image-show").append(
                    `<img class="user-img" src="${img}" alt="">`
                  );
                
                }

                $("#image-show").append(
                  `<button class="user-img"  id="trigger" >+${parseInt(total + 2)}</button>`
                );

              } else {

                
                $("#image-show").append(
                  `<img class="user-img" src="${img}" alt="">`
                );
                $("#image-show").append(
                  `<button class="user-img"  id="trigger" >+${parseInt(total + 1)}</button>`
                  );
                  break;
                }
              }
              
            }
          }
      });
    }
  });
});

  const trigger = document.querySelector("#trigger");
  const modalWrapper = document.querySelector(".modal_wrapper");
  const closeBtn = document.querySelector(".close");

  trigger.addEventListener("click", function () {
    modalWrapper.classList.add("active");
  });

  closeBtn.addEventListener("click", function () {
    modalWrapper.classList.remove("active");
  });

