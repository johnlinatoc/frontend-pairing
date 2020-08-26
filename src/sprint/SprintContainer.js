import React from 'react';
import SprintCard from './SprintCard';
import uuid from 'react-uuid';

const styles = require("./SprintContainer.module.scss");

export const SprintContainer = props => {

    const renderSprintCards = sprints => {
        const sprintCards = [];
        const sprintData = Object.keys(sprints).map(key => {return [key, sprints[key]]});
        sprintData.forEach((sprint) => sprintCards.push(<SprintCard key={uuid()} sprint={sprint}/>));

        return sprintCards;
    }

    return(
        <div className={styles.sprintContainer}>
            <h2>Sprint Pairs</h2>
            {renderSprintCards(props.sprints)}
        </div>
    )
}

export default SprintContainer;