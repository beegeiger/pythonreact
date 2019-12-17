import React from 'react';

export const Menu = props => {
    return (
        <div class="ui menu">
            <a class="browse item active">
               Menu
                <i class="dropdown icon"></i>
            </a>
        </div>
        <div class="ui fluid popup bottom left transition hidden">
            <div class="ui four column relaxed equal height divided grid">
                <div class="column">
                    <h4 class="ui header">Fabrics</h4>
                    <div class="ui link list">
                        <a class="item">Cashmere</a>
                        <a class="item">Linen</a>
                        <a class="item">Cotton</a>
                        <a class="item">Viscose</a>
                    </div>
                </div>
            </div>
        </div>
    );
};