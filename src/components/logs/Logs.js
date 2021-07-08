import React, { useEffect } from "react";
import { connect } from "react-redux"; /* Connects redux to this component */
import LogItem from "./LogItem";
import PropTypes from "prop-types";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";
/* Storing logs in component level state later on moving it into redux */

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); /* Empty array means it only runs once */

  if (loading || logs == null) {
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

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getLogs })(Logs);
