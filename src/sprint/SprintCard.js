import React from 'react';
const styles = require("./SprintCard.module.scss");

export const SprintCard = props => {

    const renderPairs = () => {
        const pairs = []

        const groups = props.sprint[1];
        groups.forEach((group, i) =>{
            if(group.length > 1){
                pairs.push(<div className={styles.pair}>
                    Group {i+1}: {group[0]} & {group[1]}
                </div>)
            } else {
                pairs.push(<div className={styles.solo}>
                    Solo: {group[0]}
                </div>)
            }
        })

        return pairs;
    }

    const sprintNum = () => {
        return props.sprint[0][0].toUpperCase() + props.sprint[0].slice(1);
    }

    return (
        <div className={styles.sprintContainer}>
            <h3>{sprintNum()}</h3>
            {renderPairs()}
        </div>
    )
}

export default SprintCard;