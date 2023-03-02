window.onload=function(){

    let start = false;
    let shuffled = false;

    // declarations
    let piecered1 = document.getElementById("red1");
    let piecepurple = document.getElementById("purple");
    let piecedarkblue1 = document.getElementById("darkblue1");
    let piecered2 = document.getElementById("red2");
    let pieceredpurple = document.getElementById("red-purple");
    let piecepurpledarkblue = document.getElementById("purple-darkblue");
    let piecedarkblue2 = document.getElementById("darkblue2");
    let pieceorangered = document.getElementById("orange-red");
    let piecepurplewhite = document.getElementById("purple-white");
    let piecedarkbluelightblue = document.getElementById("darkblue-lightblue");
    let pieceorange = document.getElementById("orange");
    let pieceorangewhite = document.getElementById("orange-white");
    let piecelightbluewhite = document.getElementById("lightblue-white");
    let piecelightblue = document.getElementById("lightblue");
    let pieceyelloworange = document.getElementById("yellow-orange");
    let piecelightgreenwhite = document.getElementById("lightgreen-white");
    let piecelightbluedarkgreen = document.getElementById("lightblue-darkgreen");
    let pieceyellow1 = document.getElementById("yellow1");
    let piecelightgreenyellow = document.getElementById("lightgreen-yellow");
    let piecedarkgreenlightgreen = document.getElementById("darkgreen-lightgreen");
    let piecedarkgreen1 = document.getElementById("darkgreen1");
    let pieceyellow2 = document.getElementById("yellow2");
    let piecelightgreen = document.getElementById("lightgreen");
    let piecedarkgreen2 = document.getElementById("darkgreen2");

    // iterate through loops with
    let pieces = [piecered1, piecepurple, piecedarkblue1, piecered2,
        pieceredpurple, piecepurpledarkblue, piecedarkblue2, pieceorangered, 
        piecepurplewhite, piecedarkbluelightblue, pieceorange, pieceorangewhite, 
        piecelightbluewhite, piecelightblue, pieceyelloworange, piecelightgreenwhite, 
        piecelightbluedarkgreen, pieceyellow1, piecelightgreenyellow, piecedarkgreenlightgreen, 
        piecedarkgreen1, pieceyellow2, piecelightgreen, piecedarkgreen2];

    // declarations
    let srcred1 = document.getElementById("red1").src;
    let srcpurple = document.getElementById("purple").src;
    let srcdarkblue1 = document.getElementById("darkblue1").src;
    let srcred2 = document.getElementById("red2").src;
    let srcredpurple = document.getElementById("red-purple").src;
    let srcpurpledarkblue = document.getElementById("purple-darkblue").src;
    let srcdarkblue2 = document.getElementById("darkblue2").src;
    let srcorangered = document.getElementById("orange-red").src;
    let srcpurplewhite = document.getElementById("purple-white").src;
    let srcdarkbluelightblue = document.getElementById("darkblue-lightblue").src;
    let srcorange = document.getElementById("orange").src;
    let srcorangewhite = document.getElementById("orange-white").src;
    let srclightbluewhite = document.getElementById("lightblue-white").src;
    let srclightblue = document.getElementById("lightblue").src;
    let srcyelloworange = document.getElementById("yellow-orange").src;
    let srclightgreenwhite = document.getElementById("lightgreen-white").src;
    let srclightbluedarkgreen = document.getElementById("lightblue-darkgreen").src;
    let srcyellow1 = document.getElementById("yellow1").src;
    let srclightgreenyellow = document.getElementById("lightgreen-yellow").src;
    let srcdarkgreenlightgreen = document.getElementById("darkgreen-lightgreen").src;
    let srcdarkgreen1 = document.getElementById("darkgreen1").src;
    let srcyellow2 = document.getElementById("yellow2").src;
    let srclightgreen = document.getElementById("lightgreen").src;
    let srcdarkgreen2 = document.getElementById("darkgreen2").src;

    // iterate through loops with
    let srcs = [srcred1, srcpurple, srcdarkblue1, srcred2, srcredpurple, 
        srcpurpledarkblue, srcdarkblue2, srcorangered, srcpurplewhite, srcdarkbluelightblue, 
        srcorange, srcorangewhite, srclightbluewhite, srclightblue, srcyelloworange, 
        srclightgreenwhite, srclightbluedarkgreen, srcyellow1, srclightgreenyellow, srcdarkgreenlightgreen, 
        srcdarkgreen1, srcyellow2, srclightgreen, srcdarkgreen2];
    
    // Red Squares Click
    let redSqr = document.getElementById("red-sqr");
    if(redSqr){
        redSqr.addEventListener('click', function(){

            if(start){

            let red1 = document.getElementById("red1");
            let red1imgsrc = red1.src;

            let redPurple = document.getElementById("red-purple");
            let redPurpleimgsrc = redPurple.src;

            let orangeRed = document.getElementById("orange-red");
            let orangeRedimgsrc = orangeRed.src;

            let red2 = document.getElementById("red2");
            let red2imgsrc = red2.src;

            red1.src = red2imgsrc;
            redPurple.src = red1imgsrc;
            orangeRed.src = redPurpleimgsrc;
            red2.src = orangeRedimgsrc;
            
            if(shuffled){
                CheckIfComplete();
            }
            }

        } );
    }

    // Purple Square Click
    let purpleSqr = document.getElementById("purple-sqr");
    if(purpleSqr){
        purpleSqr.addEventListener('click', function(){

            if(start){
        
            let purple = document.getElementById("purple");
            let prupleimgsrc = purple.src;

            let purpleDarkBlue = document.getElementById("purple-darkblue");
            let purpleDarkBlueimgsrc = purpleDarkBlue.src;

            let purpleWhite = document.getElementById("purple-white");
            let purpleWhiteimgsrc = purpleWhite.src;

            let redPurple = document.getElementById("red-purple");
            let redPurpleimgsrc = redPurple.src;

            purple.src = redPurpleimgsrc;
            purpleDarkBlue.src = prupleimgsrc;
            purpleWhite.src = purpleDarkBlueimgsrc;
            redPurple.src = purpleWhiteimgsrc;

            if(shuffled){
                CheckIfComplete();
            }
            }

        } );
    }

    // Dark Blue Square Click
    let darkBlueSqr = document.getElementById("darkblue-sqr");
    if(darkBlueSqr){
        darkBlueSqr.addEventListener('click', function(){

            if(start){

            let darkBlue1 = document.getElementById("darkblue1");
            let darkBlue1imgsrc = darkBlue1.src;

            let darkBlue2 = document.getElementById("darkblue2");
            let darkBlue2imgsrc = darkBlue2.src;

            let darkBlueLightBlue = document.getElementById("darkblue-lightblue");
            let darkBlueLightBlueimgsrc = darkBlueLightBlue.src;

            let purpleDarkBlue = document.getElementById("purple-darkblue");
            let purpleDarkBlueimgsrc = purpleDarkBlue.src;

            darkBlue1.src = purpleDarkBlueimgsrc;
            darkBlue2.src = darkBlue1imgsrc;
            darkBlueLightBlue.src = darkBlue2imgsrc;
            purpleDarkBlue.src = darkBlueLightBlueimgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // Orange Square Click
    let orangeSqr = document.getElementById("orange-sqr");
    if(orangeSqr){
        orangeSqr.addEventListener('click', function(){

            if(start){
        
            let orangeRed = document.getElementById("orange-red");
            let orangeRedimgsrc = orangeRed.src;

            let orangeWhite = document.getElementById("orange-white");
            let orangeWhiteimgsrc = orangeWhite.src;

            let yellowOrange = document.getElementById("yellow-orange");
            let yellowOrangeimgsrc = yellowOrange.src;

            let orange = document.getElementById("orange");
            let orangeimgsrc = orange.src;

            orangeRed.src = orangeimgsrc;
            orangeWhite.src = orangeRedimgsrc;
            yellowOrange.src = orangeWhiteimgsrc;
            orange.src = yellowOrangeimgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // White Square Click
    let whiteSqr = document.getElementById("white-sqr");
    if(whiteSqr){
        whiteSqr.addEventListener('click', function(){

            if(start){
        
            let purpleWhite = document.getElementById("purple-white");
            let purpleWhiteimgsrc = purpleWhite.src;

            let lightBlueWhite = document.getElementById("lightblue-white");
            let lightBlueWhiteimgsrc = lightBlueWhite.src;

            let lightGreenWhite = document.getElementById("lightgreen-white");
            let lightGreenWhiteimgsrc = lightGreenWhite.src;

            let orangeWhite = document.getElementById("orange-white");
            let orangeWhiteimgsrc = orangeWhite.src;

            purpleWhite.src = orangeWhiteimgsrc;
            lightBlueWhite.src = purpleWhiteimgsrc;
            lightGreenWhite.src = lightBlueWhiteimgsrc;
            orangeWhite.src = lightGreenWhiteimgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // Light Blue Square Click
    let lightBlueSqr = document.getElementById("lightblue-sqr");
    if(lightBlueSqr){
        lightBlueSqr.addEventListener('click', function(){

            if(start){
        
            let darkBlueLightBlue = document.getElementById("darkblue-lightblue");
            let darkBlueLightBlueimgsrc = darkBlueLightBlue.src;

            let lightBlue = document.getElementById("lightblue");
            let lightBlueimgsrc = lightBlue.src;

            let lightBlueDarkGreen = document.getElementById("lightblue-darkgreen");
            let lightBlueDarkGreenimgsrc = lightBlueDarkGreen.src;

            let lightBlueWhite = document.getElementById("lightblue-white");
            let lightBlueWhiteimgsrc = lightBlueWhite.src;

            darkBlueLightBlue.src = lightBlueWhiteimgsrc;
            lightBlue.src = darkBlueLightBlueimgsrc;
            lightBlueDarkGreen.src = lightBlueimgsrc;
            lightBlueWhite.src = lightBlueDarkGreenimgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // Yellow Square Click
    let yellowSqr = document.getElementById("yellow-sqr");
    if(yellowSqr){
        yellowSqr.addEventListener('click', function(){

            if(start){
        
            let yellowOrange = document.getElementById("yellow-orange");
            let yellowOrangeimgsrc = yellowOrange.src;

            let lightGreenYellow = document.getElementById("lightgreen-yellow");
            let lightGreenYellowimgsrc = lightGreenYellow.src;

            let yellow2 = document.getElementById("yellow2");
            let yellow2imgsrc = yellow2.src;

            let yellow1 = document.getElementById("yellow1");
            let yellow1imgsrc = yellow1.src;

            yellowOrange.src = yellow1imgsrc;
            lightGreenYellow.src = yellowOrangeimgsrc;
            yellow2.src = lightGreenYellowimgsrc;
            yellow1.src = yellow2imgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // Light Green Square Click
    let lightGreenSqr = document.getElementById("lightgreen-sqr");
    if(lightGreenSqr){
        lightGreenSqr.addEventListener('click', function(){

            if(start){
        
            let lightGreenWhite = document.getElementById("lightgreen-white");
            let lightGreenWhiteimgsrc = lightGreenWhite.src;

            let darkGreenLightGreen = document.getElementById("darkgreen-lightgreen");
            let darkGreenLightGreenimgsrc = darkGreenLightGreen.src;

            let lightGreen = document.getElementById("lightgreen");
            let lightGreenimgsrc = lightGreen.src;

            let lightGreenYellow = document.getElementById("lightgreen-yellow");
            let lightGreenYellowimgsrc = lightGreenYellow.src;

            lightGreenWhite.src = lightGreenYellowimgsrc;
            darkGreenLightGreen.src = lightGreenWhiteimgsrc;
            lightGreen.src = darkGreenLightGreenimgsrc;
            lightGreenYellow.src = lightGreenimgsrc;

            if(shuffled){
                CheckIfComplete();
            }

            }

        } );
    }

    // Dark Green Square Click
    let darkGreenSqr = document.getElementById("darkgreen-sqr");
    if(darkGreenSqr){
        darkGreenSqr.addEventListener('click', function(){
        
            if(start){

            let lightBlueDarkGreen = document.getElementById("lightblue-darkgreen");
            let lightBlueDarkGreenimgsrc = lightBlueDarkGreen.src;

            let darkGreen1 = document.getElementById("darkgreen1");
            let darkGreen1imgsrc = darkGreen1.src;

            let darkGreen2 = document.getElementById("darkgreen2");
            let darkGreen2imgsrc = darkGreen2.src;

            let darkGreenLightGreen = document.getElementById("darkgreen-lightgreen");
            let darkGreenLightGreenimgsrc = darkGreenLightGreen.src;

            lightBlueDarkGreen.src = darkGreenLightGreenimgsrc;
            darkGreen1.src = lightBlueDarkGreenimgsrc;
            darkGreen2.src = darkGreen1imgsrc;
            darkGreenLightGreen.src = darkGreen2imgsrc;

            if(shuffled){
                CheckIfComplete();
            }
            }

        } );
    }

    // shuffle pieces
    function Shuffle()
    {
        let shuffles = 0;
        let shuffleCount = 100;
        let num = 0;
        while(shuffles < shuffleCount)
        {
            num = Math.floor(Math.random() * 9)
            const squares = [redSqr, purpleSqr, darkBlueSqr, orangeSqr, whiteSqr, lightBlueSqr, yellowSqr, lightGreenSqr, darkGreenSqr];
            squares[num].click();

            shuffles += 1;
        }
        console.log("shuffled");
    }

    // shuffle on button click
    let shuffle = document.getElementById("shuffle");
    if(shuffle){
        shuffle.addEventListener('click', function(){

            // squares can be clicked
            start = true;

            //Shuffle();
            shuffled = true;

            // change text from start to shuffle
            shuffle.innerHTML = "SHUFFLE";

            // stop timer
            clearInterval(timer);
            // erase time and start new timer
            StartTimer();
        })
    }

    // diplay when complete
    function Complete()
    {
        console.log("complete");

        // stop timer
        clearInterval(timer);

        // squares cant be clicked
        start = false;

        // display complete text
        displayComplete();
    }

    // checks if position of colour is where it began
    function CheckIfComplete(){

        let valid = true;
        for (let i = 0; i < pieces.length; i++)
        {
            if(pieces[i].src != srcs[i])
            {
                valid = false;
            }
        }
        if(valid)
        {
            Complete();
        }

    }


    let timer;
    // Timer
    function StartTimer()
    {
        let time = document.getElementById("countup");
        time.innerHTML = "0.00";
        let milliseconds = 0;
        timer = setInterval(upTimer, 10);
        function upTimer() {
            ++milliseconds;
            let seconds = Math.floor(milliseconds / 100);
            let upmilliseconds = milliseconds - (seconds * 100);

            if(upmilliseconds < 10){
                time.innerHTML = seconds + ".0" + upmilliseconds;
            } else {
                time.innerHTML = seconds + "." + upmilliseconds;
            }
        }
    }

    function displayComplete()
    {
        let txt = document.getElementById("countup");

        txt.style.width = "500px";

        txt.style.display = "inline-block";
        txt.innerHTML = "TIME OF " + txt.innerHTML;
    }

}