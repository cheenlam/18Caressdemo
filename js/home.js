$(`#imgList div:eq(${parseInt(Math.random()*$(`#imgList div`).length)})`).addClass('on');

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

localStorage.setItem('nowStatus','');
mvInclude('page/mvList_all.html');
function mvInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
    });
}