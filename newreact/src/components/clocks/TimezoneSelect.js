import React from 'react';
import TimezonePicker from 'react-timezone-picker';

export const TimezoneSelect() => {
        return (
            <TimezonePicker onChange={console.log} />
        )
    }