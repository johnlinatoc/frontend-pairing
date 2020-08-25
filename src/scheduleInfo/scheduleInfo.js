import React from 'react';

const styles = require("./scheduleInfo.scss")

export const ScheduleInfo = () => {
    return(
        <div className={styles.container}>
            <h1>Info</h1>
            <div>
                <h2>Number of Sprints</h2>
                <div>hard-coded number</div>
            </div>
            <div>
                <h2>Users</h2>
                <div>render all names</div>
            </div>
        </div>
    )
}

export default ScheduleInfo;