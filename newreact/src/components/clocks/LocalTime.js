import React  from 'react';
import Clock from 'react-live-clock';
 
export const LocalTime = props => {
    return( 
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
}