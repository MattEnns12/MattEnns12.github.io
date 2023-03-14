window.onload=function(){
    // Red Squares Click
    let whiteSqr = document.getElementById("white-sqr");
    if(whiteSqr){
        whiteSqr.addEventListener('click', function(){

            let purplewhite = document.getElementById("purple-white");
            let purplewhiteimgsrc = purplewhite.src;

            let lightbluewhite = document.getElementById("lightblue-white");
            let lightbluewhiteimgsrc = lightbluewhite.src;

            let lightgreenwhite = document.getElementById("lightgreen-white");
            let lightgreenwhiteimgsrc = lightgreenwhite.src;

            let orangewhite = document.getElementById("orange-white");
            let orangewhiteimgsrc = orangewhite.src;

            purplewhite.src = orangewhiteimgsrc;
            lightbluewhite.src = purplewhiteimgsrc;
            lightgreenwhite.src = lightbluewhiteimgsrc;
            orangewhite.src = lightgreenwhiteimgsrc;
        });
    }

    document.getElementById("shuffle").onclick = function () {
        location.href = "/foursquaregame.html";
    };
}