$(document).ready(function(){
    //Add the youtube link and convert link button to each track
    $(".playlog__programs__program__track").append("<div class=\"youtube_section\"><a href=\"#\" id=\"youtube_link\">Youtube</a></div>");
    $(".playlog__programs__program__track").append("<div class=\"convert_section\"><a href=\"#\" id=\"convert_link\">Convert</a></div>");

    //When the user clicks on the youtube link
    $(".youtube_section a").on('click', function(){
        var track_div = $(this).parent().parent();
        var track_info = track_div.find('div .playlog__programs__program__data');
        var title = track_info[1].innerText;
        var artist = track_info[2].innerText;
        var query = artist + " " + title;
        getYoutubeLink(query, "tab");
    });

    //When the user clicks on the convert link
    $(".convert_section a").on('click', function(){
        var track_div = $(this).parent().parent();
        var track_info = track_div.find('div .playlog__programs__program__data');
        var title = track_info[1].innerText;
        var artist = track_info[2].innerText;
        var query = artist + " " + title;
        getYoutubeLink(query, "download");
    });

    function getYoutubeLink(videoQuery, type){
        $.get(
            "https://www.googleapis.com/youtube/v3/search",{
                part: 'snippet, id',
                q: videoQuery,
                type: "video",
                key: "AIzaSyCgqleH2L-ds5_RrbjiDV7ctr0T7yOmPqA"
            },
                function(data){
                    var id = data.items[0].id.videoId;
                    var link = "https://www.youtube.com/watch?v=" + id;
                    
                    //The content of the new tab will depend on the link the user selected
                    if(type == "tab"){
                        window.open(link, "_blank");

                    }else if(type == "download"){
                        window.open("https://www.youtubeinmp3.com/fetch/?video=" + link, "_blank");

                    }else{
                        console.log("ERROR - Download or Tab not chosen");
                    }
                }
        );
    }
});