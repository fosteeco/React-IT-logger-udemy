import React, { useState, useEffect } from "react";
import LogItem from "../logs/LogItem";
import TechItem from "./TechItem";
/* Storing logs in component level state later on moving it into redux */

const TechListModal = () => {
  const [techs, setTechs] = useState([]); /* Empty array by default */
  const [loading, setLoading] = useState(false); /* Default = false */

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); /* Empty array means it only runs once */

  const getTechs = async () => {
    setLoading(true);
    /* don't need localhost:5000 because of proxy defined in packages.json */
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  /* Using collection, like a list group from bootstrap */
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
