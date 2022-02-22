import React from 'react';

function AboutItem({name, icon, content}) {
    return (
        <div>
            <h3>
                {name}
                {icon}
            </h3>
            {content}
        </div>
    )
}

export default AboutItem;