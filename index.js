function search(){
    let inputPanel=document.getElementById("input");

    let movieName = inputPanel.value;

    let htmlRequest = new XMLHttpRequest();

    let url="http://www.omdbapi.com/?apikey=a9891776&t="+movieName;

    htmlRequest.open("GET",url)
    htmlRequest.responseType = "json";
    htmlRequest.send();

    htmlRequest.onload = function(){

        console.log(htmlRequest.response);
        let poster = document.getElementById("poster");
        poster.src = htmlRequest.response.Poster;

        let title = document.getElementById("title");
        title.innerHTML = htmlRequest.response.Title;

        let year = document.getElementById("year");
        year.innerHTML = htmlRequest.response.Year;
    }
}
