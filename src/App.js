import React, { useState, useEffect } from "react";
import ScheduleInfo from "./scheduleInfo/ScheduleInfo";
import SprintContainer from "./sprint/SprintContainer";
import './scss/_normalize.scss';

const styles = require("./App.module.scss");

const App = () => {
  const [sprints, setSprints] = useState({});
  const [users, setUsers] = useState([]);
  const URL = "http://localhost:3000";

  const scheduleData = () => {
    const reqObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${URL}/schedules/1/completed_schedule`, reqObj)
      .then((resp) => resp.json())
      .then((resp) => setSprints(resp))
      .catch((err) => console.error(err));
  };

  const userData = () => {
    const reqObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${URL}/users`, reqObj)
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    scheduleData();
    userData();
    // eslint-disable-next-line
  }, []);

  console.log("users", users)
  console.log("sprints = ", sprints)
  return (
    <div className="App">
      <h1 className={styles.title}>Pairing Schedule</h1>
      <ScheduleInfo users={users} sprints={sprints} />
      <SprintContainer sprints={sprints} />
    </div>
  );
};

export default App;
