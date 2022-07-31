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
    $('.btn-floating-menu').click(function(){
        $(this).next().show();
    });
    $('.floating-menu .btn-close').click(function(){
        $(this).parents('.floating-menu').hide();
    });
});