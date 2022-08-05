$(function(){
    /* 메뉴 fixed */
    var hd = $('.header-gnb'),
        win = $(window);

    win.scroll(function(){
        win_top = $(this).scrollTop();
        
        if(win_top > 0) {
            hd.addClass('fixed');
        }else{
            hd.removeClass('fixed');
        };
    })

     /* 커뮤니티 좋아요하기 */
    $('.like').click(function(){
        $(this).toggleClass('on');
    });

    $('.comment').click(function(){
        $('.text-input input').focus();
        return false;
    });

    /* 내용 입력시 활성화 */

    $('.text-input input').keyup(function(){

        var txt_n = $(this).val()
    
        if($(this).val()){
            $('.comment-textarea .btn-done path').css('fill','#0A3CD2');
        } else{
            $('.comment-textarea .btn-done path').css('fill','#9E9E9E');
        }
    });
});