import React from 'react';
import './DescriptionBox.css';

function DescriptionBox() {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias quod eius enim impedit nihil ipsa iste porro minima
                    corporis numquam rerum, expedita illo, pariatur quasi
                    consequuntur. Exercitationem ducimus quos sint. Et
                    distinctio incidunt aut reprehenderit dicta, quod cumque in
                    quae corrupti enim. Similique culpa facere ad dignissimos
                    quaerat veritatis placeat explicabo cupiditate, voluptate
                    perferendis ex, est nihil, aliquid officiis ipsa!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam non quae, vel iste quasi beatae excepturi iure
                    odit possimus itaque nostrum quam rem recusandae quas?
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;
