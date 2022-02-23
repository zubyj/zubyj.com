import React from 'react';

function AboutItem({name, icon, content}) {
    return (
        <div>
            <h4>
                <span className="About-item-title">{name}</span>
                <span>{icon}</span>
            </h4>
            {content}
        </div>
    )
}

export default AboutItem;