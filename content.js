$(document).ready(function(){

    //Append Youtube link to each track
    $(".playlog__programs__program__track").append("<div class=\"youtube_section\"><a href=\"#\" id=\"youtube_link\">Youtube</a></div>");
    
    //Youtube http request
    function search(videoQuery){
        $.get(
            "https://www.googleapis.com/youtube/v3/search",{
                part: 'snippet, id',
                q: videoQuery,
                type: "video",
                key: "AIzaSyCgqleH2L-ds5_RrbjiDV7ctr0T7yOmPqA"
            },
                function(data){
                    var id = data.items[0].id.videoId;
                    var url = "https://www.youtube.com/watch?v=" + id;
                    window.open(url, "_blank");
                }
        );
    }

    //When the user clicks on the track div
    $(".youtube_section a").on('click', function(){
        var track_div = $(this).parent().parent();
        var track_info = track_div.find('div .playlog__programs__program__data');
        var title = track_info[1].innerText;
        var artist = track_info[2].innerText;
        var query = artist + " " + title;
        search(query);
    });
});

