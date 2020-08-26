import React from "react";

const styles = require("./ScheduleInfo.module.scss");

export const ScheduleInfo = (props) => {
    console.log(props.sprints);
    const renderUsers = () => {
        const allUsers = [];

        props.users.forEach((user) => {
            allUsers.push(<div>{user.name}</div>);
        });

        return allUsers;
    };

    const numOfSprints = () => {
        return Object.keys(props.sprints).length < 1
            ? "LOADING"
            : Object.keys(props.sprints).length;
    };

    return (
        <div className={styles.container}>
            <h1>Info</h1>
            <div>
                <h2>Number of Sprints</h2>
                <div>{numOfSprints()}</div>
            </div>
            <div>
                <h2>Users</h2>
                <div>{renderUsers()}</div>
            </div>
        </div>
    );
};

export default ScheduleInfo;
