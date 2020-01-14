import React from 'react';

export const Countdown = props => {
    function count{{ set.alert_set_id }}(change = 0) {
        t{{ set.alert_set_id }} = (t{{ set.alert_set_id }} - 1000);
        var t = t{{ set.alert_set_id }};
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );


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
        var countDiv = document.getElementById('countdown{{ set.alert_set_id }}');

        // Then we set the text inside the clock div 
        // to the hours, minutes, and seconds of the current time

        if(t > 0) {
        countDiv.innerText = days + " days and " + hours + ":" + minutes + ":" + seconds + " Remaining";
    
        return {
            'changes': change + 1 
        };
        }
        else {
        countDiv.innerText = "0 days and 0:00:00 Remaining";
    
        return {
            'changes': change 
        };

        }

    }

    
    return (

    )
}