import React from 'react';

export const LocalTime = props => {
    const timezone = props.timezone

    function displayTime(timezone) {
	    var currentTime = new Date();
		var year = currentTime.getYear() + 1900;
	    var month = currentTime.getMonth() + 1;
	    var day = currentTime.getDate();
	    
	    
	    var hours = currentTime.getUTCHours() + 1;
	    var minutes = currentTime.getMinutes();
	    var seconds = currentTime.getSeconds();
	    var meridiem = "AM";
	    hours = hours + timezone;
	    if (hours < 0) {
	    	hours = 24 + hours
	    }
	    if (hours > 12) {
		    hours = hours - 12;
		    meridiem = "PM";
		}

		// 0 AM and 0 PM should read as 12
		if (hours === 0) {
		    hours = 12;    
		}

	    if (seconds < 10) {
	    // Add the "0" digit to the front
	    // so 9 becomes "09"
	    seconds = "0" + seconds;
		}

		if (minutes < 10) {
	    // Add the "0" digit to the front
	    // so 9 becomes "09"
	    minutes = "0" + minutes;
		}

	    // This gets a "handle" to the clock div in our HTML
	    var clockDiv = document.getElementById('clock');

	    // Then we set the text inside the clock div 
	    // to the hours, minutes, and seconds of the current time
	    clockDiv.innerText =  hours + ":" + minutes + ":" + seconds + " " + meridiem + ",    " + month + "/" + day + "/" + year;
	}


    return (
        <>
            <div id='clock'></div>
        </>
    )
}