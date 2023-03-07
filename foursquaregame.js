window.onload=function(){

    let start = false;
    let shuffled = false;

    // declerations
    let piecered1 = document.getElementById("red1");
    let piecepurple1 = document.getElementById("purple1");

    let piecered2 = document.getElementById("red2");
    let pieceredpurple = document.getElementById("red-purple");
    let piecepurple2 = document.getElementById("purple2");

    let pieceredorange = document.getElementById("orange-red");
    let piecepurplewhite = document.getElementById("purple-white");

    let pieceorange1 = document.getElementById("orange1");
    let pieceorangewhite = document.getElementById("orange-white");
    let piecewhite1 = document.getElementById("white1");

    let pieceorange2 = document.getElementById("orange2");
    let piecewhite2 = document.getElementById("white2");

    // iterate through loops with
    let pieces = [piecered1, piecepurple1, piecered2, pieceredpurple, 
        piecepurple2, pieceredorange, piecepurplewhite, pieceorange1, 
        pieceorangewhite, piecewhite1, pieceorange2, piecewhite2];

    // declerations
    let srcred1 = document.getElementById("red1").src;
    let srcpurple1 = document.getElementById("purple1").src;

    let srcred2 = document.getElementById("red2").src;
    let srcredpurple = document.getElementById("red-purple").src;
    let srcpurple2 = document.getElementById("purple2").src;

    let srcredorange = document.getElementById("orange-red").src;
    let srcpurplewhite = document.getElementById("purple-white").src;

    let srcorange1 = document.getElementById("orange1").src;
    let srcorangewhite = document.getElementById("orange-white").src;
    let srcwhite1 = document.getElementById("white1").src;

    let srcorange2 = document.getElementById("orange2").src;
    let srcwhite2 = document.getElementById("white2").src;

    // iterate through loops with
    let srcs = [srcred1, srcpurple1, srcred2, srcredpurple,
        srcpurple2, srcredorange, srcpurplewhite, srcorange1, srcorangewhite,
        srcwhite1, srcorange2, srcwhite2];

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
        
            let purple1 = document.getElementById("purple1");
            let purple1imgsrc = purple1.src;

            let purple2 = document.getElementById("purple2");
            let purple2imgsrc = purple2.src;

            let purpleWhite = document.getElementById("purple-white");
            let purpleWhiteimgsrc = purpleWhite.src;

            let redPurple = document.getElementById("red-purple");
            let redPurpleimgsrc = redPurple.src;

            purple1.src = redPurpleimgsrc;
            purple2.src = purple1imgsrc;
            purpleWhite.src = purple2imgsrc;
            redPurple.src = purpleWhiteimgsrc;

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

            let orange1 = document.getElementById("orange1");
            let orange1imgsrc = orange1.src;

            let orange2 = document.getElementById("orange2");
            let orange2imgsrc = orange2.src;

            orangeRed.src = orange1imgsrc;
            orangeWhite.src = orangeRedimgsrc;
            orange2.src = orangeWhiteimgsrc;
            orange1.src = orange2imgsrc;

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

            let white1 = document.getElementById("white1");
            let white1imgsrc = white1.src;

            let white2 = document.getElementById("white2");
            let white2imgsrc = white2.src;

            let orangeWhite = document.getElementById("orange-white");
            let orangeWhiteimgsrc = orangeWhite.src;

            purpleWhite.src = orangeWhiteimgsrc;
            white1.src = purpleWhiteimgsrc;
            white2.src = white1imgsrc;
            orangeWhite.src = white2imgsrc;

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
            num = Math.floor(Math.random() * 4)
            const squares = [redSqr, purpleSqr, orangeSqr, whiteSqr];
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

            shuffled = false;

            // Shuffle
            Shuffle();
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
        let seconds = 0;
        let minutes = 0;
        timer = setInterval(upTimer, 10);
        function upTimer() {

            ++milliseconds;
            if(milliseconds > 99){
                ++seconds;
                milliseconds = 0;
            }
            if(seconds > 59){
                ++minutes;
                seconds = 0;
            }

            // format timer
            if(minutes > 0){
                if(seconds < 10){
                    if(milliseconds < 10){
                        time.innerHTML = minutes + ":0" + seconds + ".0" + milliseconds;
                    } else {
                        time.innerHTML = minutes + ":0" + seconds + "." + milliseconds;
                    }
                } else{
                    if(milliseconds < 10){
                        time.innerHTML = minutes + ":" + seconds + ".0" + milliseconds;
                    } else {
                        time.innerHTML = minutes + ":" + seconds + "." + milliseconds;
                    }
                }
            }
            else{
                if(milliseconds < 10){
                    time.innerHTML = seconds + ".0" + milliseconds;
                } else {
                    time.innerHTML = seconds + "." + milliseconds;
                }
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