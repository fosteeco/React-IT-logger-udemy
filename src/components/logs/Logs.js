import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
/* Storing logs in component level state later on moving it into redux */

const Logs = () => {
  const [logs, setLogs] = useState([]); /* Empty array by default */
  const [loading, setLoading] = useState(false); /* Default = false */

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); /* Empty array means it only runs once */

  const getLogs = async () => {
    setLoading(true);
    /* don't need localhost:5000 because of proxy defined in packages.json */
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };
  if (loading) {
    /* Going to use materialize preloader */
    return <Preloader />;
  }

  /* Using collection, like a list group from bootstrap */
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

export default Logs;
