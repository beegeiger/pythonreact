import React from 'react';
import { useAuth0 } from 'simple-auth0-react';
// import './semantic/dist/semantic.min.css';
import './semantic/dist/semantic.css';

export const Menu = props => {
    const { logout } = useAuth0()
    return (
        <>
        <div class="ui icon button" data-content="Add users to your feed">
  <i class="add icon"></i>
</div>
        </>
    );
};