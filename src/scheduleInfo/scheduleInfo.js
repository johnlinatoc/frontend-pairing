import React from "react";

const styles = require("./ScheduleInfo.module.scss");

export const ScheduleInfo = (props) => {
    console.log(props.sprints);
    const renderUsers = () => {
        const allUsers = [];

        props.users.forEach((user, index) => {
        allUsers.push(<div className={styles.developer}>{index + 1}. {user.name}</div>);
        });

        console.log(allUsers)
        return allUsers;
    };

    const numOfSprints = () => {
        return Object.keys(props.sprints).length < 1
            ? "LOADING"
            : Object.keys(props.sprints).length;
    };

    return (
        <div className={styles.container}>
            <h2>Schedule Info</h2>
            <div className={styles.sprintNumWrapper}>
                <h3>Number of Sprints:</h3>
                <div>{numOfSprints()} sprints</div>
            </div>
            <div className={styles.sprintNumWrapper}>
                <h3>Sprint Duration:</h3>
                <div>5 days (Mon-Fri)</div>
            </div>
            <div className={styles.developerContainer}>
                <h3>Developers:</h3>
                <div className={styles.developers}>{renderUsers()}</div>
            </div>
        </div>
    );
};

export default ScheduleInfo;
