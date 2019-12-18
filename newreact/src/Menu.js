import React from 'react';
import { useAuth0 } from 'simple-auth0-react';


export const Menu = props => {
    const { logout } = useAuth0()
    return (
        <>
        <div class="ui compact menu">
        <div class="ui simple dropdown item">
            Dropdown
            <i class="dropdown icon"></i>
            <div class="menu">
            <div class="item">Choice 1</div>
            <div class="item">Choice 2</div>
            <div class="item">Choice 3</div>
            </div>
        </div>
        </div>
        </>
    );
};