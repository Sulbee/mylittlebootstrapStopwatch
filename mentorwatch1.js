 //1 define var to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//5 define vars to hold "dispaly values"
let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;

//7 define var to hold setInterval function
let interval = null;

//define var to hold stopwaTch status
let status = "stopped";

//2 STOPWATCH FUNCTION {LOGIC TO  determine when to INCREMENT NEXT VALUE, ETC}
function stopwatch(){

    seconds++;

    //3 logic to determine when to increament next value
    if(seconds / 60 === 1 ){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    } 

    //6 if seconds/minutes/hours are only one digit add a leading zero to the value
    if(seconds < 10){
        displayseconds = "0" + seconds.toString();
    } else{
        displayseconds = seconds;
    }

    if(minutes < 10){
        displayminutes = "0" + minutes.toString();
    } else{
        displayminutes = minutes;
    }

    if(hours < 10){
        displayhours = "0" + hours.toString();
    } else{
        displayhours = hours;
    }

    //4 display updated time value to user
    document.getElementById("display").innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;


}


function startstop(){

    if(status === "stopped"){

          //9 start the stopwatch ( by calling the setinterval function)
       interval = window.setInterval(stopwatch, 1000);
       document.getElementById("startstop").innerHTML = "stop";
        status = "started";
    }
    else{
      window.clearInterval(interval);
      document.getElementById("startstop").innerHTML = "start";
       status = "stopped";
    }
}
























/*
//========0LD==========



   


    //4 display updated tme value to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds; 
    
}

window.setInterval(stopwatch, 1000);

function startstop() {

   if (status == "stopped") {

        //start the stopwatch (by calling the setinterval() function)   
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
   } else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
   }
    
}

//function to reset the stopwatch
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "start";
}



*/









 











