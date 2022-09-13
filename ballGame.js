var colors = ["red", "green", "blue"];
//getting random color from the array
function colorSelection()
{
    var random = Math.random() * 3;  //getting random value from 0<=3
    var randomValue = parseInt(random);// converting into integer
    var ballColor = colors[randomValue];// Getting color name from list
    return ballColor;
};
//getting changing color name
function choose()
{
    window.display = document.getElementById("displayColor");
    display.innerText = colorSelection();
    return display.innerText;
};
choose();



//getting balls colors
function ballsColor(){
    id=0;
    for (id=0 ; id < 16 ; id++ )
    {
        var ballsId = document.getElementById(id); //saving id number to ballsId
        ballsId.style.backgroundColor=colorSelection();
    }
};
ballsColor();

// function hideBallsColor()
// {
//     ballsId.style.backgroundColor.visibility = "hidden";
// };

var points = 0;
var scoreCount = document.getElementById("score");
scoreCount.innerText = points;
function choosing(clickedId)
{
    // choose();
    window.colorChoosed = document.getElementById(clickedId);
    var colorChecking = colorChoosed.style.backgroundColor.toUpperCase();
    // console.log(colorChecking);
    // console.log(display.innerText);
    // console.log(score);
    // console.log(score);
    if ( display.innerText === colorChecking)
    {
        colorChoosed.style.visibility = "hidden";
        points++;
        scoreCount.innerText = points;
        choose();
        // console.log(score);
    }
    else
    {
        points--;
        scoreCount.innerText = points;
        // console.log(points);
    }
};

//score reset
//when we click on ball choosing runs automatically so no need to call that function
function resetScore()
{
    points = 0;
    scoreCount.innerText = points;
}
//setting balls visibility 
function allBallsVisible(){
    id=0;
    for (id=0 ; id < 16 ; id++)
    {
        var ballsId = document.getElementById(id); //saving id number to ballsId
        ballsId.style.visibility = "visible";
    }
};
var interval; //to cancel the loop of countDown
// var secondInterval; //to cancel the second loop of countDown
document.getElementById("restart").addEventListener('click', function(){

    ballsColor();
    // className.classList.remove('willRemoveClassThisOne');
    choose();
    allBallsVisible();
    resetScore();
    document.getElementById("gameOver").style.display = "none";
    showTimer();
    setTimeout(startTimer, 100); //it wil run after 2seconds
    if (restartValue > 0)
    {
        restartTimer();
    }
});
function showTimer()
{
    timer.style.boxShadow = "0px 0px 5px blue";
    // adding displayTimer in Timer class
    timer.classList.add("displayTimer");
    
};
function hideTimer()
{
    timer.classList.remove("displayTimer");
};

//timer 
var restartValue = 0;
var totalMinutes = 1;
var totalSeconds = totalMinutes * 60;
var timeInterval;
//starting countDown
function startTimer()
{
    clearInterval(timeInterval);
    timeInterval = setInterval(countDown, 1000);
};
//Reset and restarting countDown
function restartTimer()
{
    clearInterval(timeInterval);
    minutes = 1;
    seconds = 0;
    time.innerText = "0" + minutes + " : "+ "0" + seconds;
    totalMinutes = 1;
    totalSeconds = totalMinutes * 60;
    setTimeout(timeInterval, 2000)
};

function countDown()
{
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    
    console.log(totalSeconds);
    // for last Moments
    if (seconds <= 10 && minutes !== 1)
    {
        timer.style.boxShadow = "0px 0px 5px red";
    }
    //when seconds is less than 9 this will make it 2 digits
    if (seconds < 10 && seconds !== 0 || minutes > 0 && seconds === 0)
    {
        seconds = "0" + seconds;
        // alert("hello");
    }
    //double equals doesn't see the type it just compare the values
    else if (minutes === 0 && seconds == 00)
    {
        time.innerText = "Time Up!";
        clearInterval(timeInterval);
        restartValue++;
        setTimeout(hideTimer, 1000); //hiding timer 
        document.getElementById("gameOver").style.display = "flex";
        return;
    }

    time.innerText =  "0"+ minutes + " : " + seconds;
    totalSeconds--;

};

