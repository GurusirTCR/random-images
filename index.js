
    $(document).ready(function(){
        $(".apply").click(function(){
            
            var demo = $("#image-show").width();
                    + "px";
            
            var newWidth = $(".width").val();

                $(".show_images").width(newWidth);
            
            demo = $("#image-show").width();
                    + "px";

            var photos = $("#photos").val();
                    + "px";
                photos = $('#photos').val();
            $.ajax({
                    url: 'https://randomuser.me/api/?results='+photos,
                    dataType: 'json',
                    success: function (data) {
                        console.log(data.results[0]);
                        for(var i=0;i<photos-1;i++)
                        {
                            var data1 = data.results[i];
                            var img = data1.picture.medium;
                            console.log(img);
                            var maxphoto = photos*50;
                            if(demo <= 150)
                            {
                                $("#image-show").append(`<img class="user-img" src="${img}" alt="">`);
                            }


                            }
                    }
                 });
           
        });
    });

    const trigger = document.querySelector('#trigger');
    const modalWrapper = document.querySelector('.modal_wrapper');
    const closeBtn = document.querySelector('.close');

    trigger.addEventListener('click', function () {
        modalWrapper.classList.add('active')
    })

    closeBtn.addEventListener('click', function () {
        modalWrapper.classList.remove('active');
    })