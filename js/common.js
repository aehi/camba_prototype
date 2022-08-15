$(function(){
    /* tab */
    $('section:not(:first)').hide();
    $('.tab li a').click(function(){
        var link_li = $(this).attr('href');
        
        $('section').hide();
        $(link_li).show();
        
        $('.tab li').removeClass('active');
        $(this).parent().addClass('active');
        
        return false;
    })
    
    /* 커뮤니티 좋아요하기 */
    $('.like').click(function(){
        $(this).toggleClass('on');
    });

    /* 글쓰기 버튼 */
    $('.btn-floating-menu, .layer-dim').click(function(){
        
        $('.floating-wrap').toggleClass('on');
        $('body').toggleClass('hidden');

        if ($('.floating-wrap').hasClass('on')){
            $(this).attr('aria-label','닫기');
        }else{
            $(this).attr('aria-label','글 쓰기');
        }
    });

    /* 하단메뉴 */
    var quick = $('.quick li a')
    quick.click(function(){
        quick.parent().removeClass('on');
        $(this).parent().addClass('on');
    });
   
});