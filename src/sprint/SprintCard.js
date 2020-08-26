import React from 'react';
const styles = require("./SprintCard.module.scss");

export const SprintCard = props => {

    const renderPairs = () => {
        const pairs = []

        const groups = props.sprint[1];
        groups.forEach((group, i) =>{
            if(group.length > 1){
                pairs.push(<div>
                    group {i+1}: {group[0]} & {group[1]}
                </div>)
            } else {
                pairs.push(<div>
                    solo: {group[0]}
                </div>)
            }
        })

        return pairs
    }
    return (
        <div>
            <h1>{props.sprint[0]}</h1>
            {renderPairs()}
        </div>
    )
}

export default SprintCard;