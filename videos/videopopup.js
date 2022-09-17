/*
 * Author: Sławomir Netteria.NET https://netteria.net
 */

var video_modem_settings, video_modem_patter;

var video_modem_is_open = false;

(function ($) {

    $.fn.VideoPopUp = function (options) {
        
        var defaults = {
            backgroundColor: "#000000",
            opener: "video",
            maxweight: "640",
            pausevideo: true,
            idvideo: ""
        };
        
        video_modem_patter = this.attr('id');
        video_modem_settings = $.extend({}, defaults, options);

        
        $('#' + video_modem_patter + '').css("display", "none");
        $('#' + video_modem_patter + '').append('<div id="opct"></div>');
        $('#opct').css("background", video_modem_settings.backgroundColor);
        $('#' + video_modem_patter + '').css("z-index", "100001");
        $('#' + video_modem_patter + '').css("position", "fixed")
        $('#' + video_modem_patter + '').css("top", "0");
        $('#' + video_modem_patter + '').css("bottom", "0");
        $('#' + video_modem_patter + '').css("right", "0");
        $('#' + video_modem_patter + '').css("left", "0");
        $('#' + video_modem_patter + '').css("padding", "auto");
        $('#' + video_modem_patter + '').css("text-align", "center");
        $('#' + video_modem_patter + '').css("background", "none");
        $('#' + video_modem_patter + '').css("vertical-align", "vertical-align");
        $("#videCont").css("z-index", "100002");
        $('#' + video_modem_patter + '').append('<div id="closer_videopopup">&otimes;</div>');
        $("#" + video_modem_settings.opener + "").on('click', function () {
            video_modem_is_open = true;
            $('#' + video_modem_patter + "").show();
            $('#'+video_modem_settings.idvideo+'').trigger('play');
            var video = document.createElement(video_modem_settings.idvideo);
            video.currentTime = 0;
            $('#'+video_modem_settings.idvideo+'').prop('muted', false);

            // console.log(video_modem_settings.idvideo);
            // var video=document.getElementById(video_modem_settings.idvideo);
            // video.muted = false;
        });
        $("#closer_videopopup").on('click', closeVideoModem);
        return this.css({

        });
    };

}(jQuery));

function closeVideoModem() {
    if(video_modem_settings.pausevideo==true){
        $('#'+video_modem_settings.idvideo+'').trigger('pause');
    } else {
        stopVideo();
    }
    $('#' + video_modem_patter + "").hide();
    $('#'+video_modem_settings.idvideo+'').prop('muted', true);
}

function stopVideo() {
    var video = document.getElementById(video_modem_settings.idvideo);
    var tag = $('#' + video_modem_patter + '').get(0).tagName;
    if (tag == 'video') {
        video.pause();
        video.currentTime = 0;
    }
}


$(function () {
    $('#vidBox').VideoPopUp({
        opener: "video-trigger",
        idvideo: "video-player"
    });
});

$('#vidBox').VideoPopUp({
    backgroundColor: "#000000"
});
$('#vidBox').VideoPopUp({
    pausevideo: true
});
$('#vidBox').VideoPopUp({
    maxweight: "640"
});

