var LAST_SCORE;
var count = 1;
$(function(){
    loadImgs();
})

/**
 * 根据原心设置点击区域
 */
function setPoints(pointList){
    var html = '';
    pointList.forEach(ele => {
        html += '<div class="area" style="top:'+ (ele[1]-25) +'px;left:'+ (ele[0]-25) +'px;">\
                    <div class="center_point"></div>\
                </div>';
    });
    $('#area_list').html(html);
}
// 绑定事件
function bindClick(len){
    var score = $('#score  .complete').html();
    LAST_SCORE = score;
    
    $('.pic_box').on('click',  function(e){
        $('.error-point').addClass("hide");
        e.stopPropagation();
        if($(e.target).hasClass("area")||$(e.target).hasClass("center_point")){
            if(!$(e.target).children('.center_point').hasClass('choosen')){
                $(e.target).children('.center_point').addClass('choosen');
                ++ score;
                $('#score .complete').html(score);
                if(score - LAST_SCORE == len){
                    setTimeout(() => {
                        render();
                    }, 1000);
                }
            }
        }else{
            var posx = e.clientX-25,
                posy = e.clientY-25;
            $('.error-point').removeClass("hide").css({"left":posx,"top":posy});
        }
    })
    // $('#area_list').on('click', '.area', function(e){
        
    //     e.stopPropagation();
    //     if(!$(this).children('.center_point').hasClass('choosen')){
    //         $(this).children('.center_point').addClass('choosen');
    //         ++ score;
    //         $('#score').html(score);
    //         if(score - LAST_SCORE == len){
    //             setTimeout(() => {
    //                 render();
    //             }, 1000);
    //         }
    //     }
    // })
}

function render(){
    ++ count;
    if(count < 4){
        $('.img').attr('src', '../static/imgs/'+count+'.jpg');
        var arr = [
            [Math.random()*300, Math.random()*200],
            [Math.random()*500, Math.random()*400],
            [Math.random()*900,Math.random()*500]
        ]
        loadImgs(arr);
    }
}

function loadImgs(arr = null){
    var centerPoints = arr == null?[
        [100, 100],
        [900, 400],
        [1000, 200]
    ]: arr;
    setPoints(centerPoints);
    bindClick(centerPoints.length);
}