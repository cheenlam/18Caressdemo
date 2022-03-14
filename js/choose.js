$('#actressMenu li').mouseenter(function() {
    let data = $(this).find('h2').text()
    $('#imgList div').removeClass('on');
    $('#imgList div').each(function() {
        if ($(this).attr('alt') == data) {
            $(this).addClass('on');
        }
    })
})

$('#sortMenu li').mouseenter(function() {
    let data = $(this).find('h2').text()
    $('#imgList div').removeClass('on');
    $('#imgList div').each(function() {
        if ($(this).attr('alt') == data) {
            $(this).addClass('on');
        }
    })
})

$('#imgList div').each(function(){
    if($(this).attr('alt') == localStorage.getItem('nowStatus')){
        $(this).addClass('on')
    }
})


$('#menuBar').click(function(){
    $('#menuBar').addClass('on')
    $('#sortMenu').addClass('on')
})

$('#closeBg,#closeBtn').click(function(){
    $('#menuBar').removeClass('on')
    $('#sortMenu').removeClass('on')
})

$(window).resize(function(){
    $('#menuBar').removeClass('on')
    $('#sortMenu').removeClass('on')
})

mvInclude('/page/mvList_choose.html'); 
function mvInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
    });
}