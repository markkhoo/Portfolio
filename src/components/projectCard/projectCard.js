import React from 'react';
import './projectCard.css';

function Card(props) {
    return (
        <div className="card" id={props.id}>
            <div className="content">
                <h2 className="title">{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.deploy_link} target="_blank" rel="noreferrer noopener">Deployed</a>
                <a href={props.github_link} target="_blank" rel="noreferrer noopener">GitHub</a>
            </div>
        </div>
    )
};

export default Card;