
var oldW = document.querySelector(".width").value;
var oldP = document.querySelector(".photos").value;
console.log(oldW,oldP);
  $(document).ready(function () {
    $(".apply").click(function () {
      // var demo = $("#image-show").width();
      // +"px";
      var newWidth = $(".width").val();
      
      $(".show_images").width(newWidth);
      demo = $("#image-show").width();

      +"px";
      var photos = $("#photos").val();

      
      
      const screenWidth = screen.width;
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
            $(".show_images").html('');
            for (var i = 0; i < newimg1; i++)
            {
              if (newWidth == photos * 50) {
                var data1 = data.results[i];
                var img = data1.picture.medium;
                $("#image-show").append(
                  `<img class="user-img" src="${img}" alt="">`
                );
                console.log("Width is LOOOO 111");
              }
              else if(newWidth > photos * 50){
                  var data1 = data.results[i];
                  var img = data1.picture.medium;
                  $("#image-show").append(
                      `<img class="user-img" src="${img}" alt="">`
                    );
                    console.log("###3333");
              } 
              else if (photos * 50 != newWidth || newWidth%50==0) {
                for (var i = 0; i < newimg1 - 1; i++) {
                  if (newWidth != photos * 50) {
                    var data1 = data.results[i];
                    var img = data1.picture.medium;
                    console.log(img);
                    $("#image-show").append(
                      `<img class="user-img" src="${img}" alt="">`
                    );
                  }
                }
               if(newWidth%50 == 0){ 
                    $("#image-show").append(
                      `<button id="trigger" onclick="modal()" class="user-img">+${
                        photos- newimg1+1
                      }</button>`
                    );
               }else{
              
                $("#image-show").append(
                  `<button id="trigger" onclick="modal()" class="user-img">+${
                    Math.round(photos -newimg1+1)
                  }</button>`);
                
                  console.log("Width is LOOOO 2222");
                }
              }
            }
          },
        });
      }
    });
  });
  

function modal() {
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
