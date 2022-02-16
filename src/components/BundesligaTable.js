import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function BundesligaTable() {
  const [teams, setTeams] = useState([]);
  const [trial, setTrial] = useState([]);
  const [points, setPoints] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:6001/table/");
      const trial = res.data;
      //   console.log(res.data[0]["team"]);
      //   setTeams((prev) => [...prev, res.data[0]["team"]]);
      //   setTeams((prev) => [...prev, res.data[1]["team"]]);
      //   setTeams((prev) => [...prev, res.data[2]["team"]]);
      setTrial(res.data);
      console.log(trial);
      //   for (let i = 0; i < 18; i++) {
      //     setTeams((prev) => [...prev, res.data[i]["team"]]);
      //   }
    } catch (err) {
      console.log("ERROR " + err);
    }
  }, []);
  return (
    <div>
      {/* <ul>
        {teams.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul> */}
      <Table className="container table table-dark table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Games Played</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {trial.map((elem) => (
            <tr key={elem["index"]}>
              <td>{elem["index"] + 1}</td>
              <td scope="row">{elem["team"]}</td>
              <td>{elem["gamesPlayed"]}</td>
              <td>{elem["points"]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BundesligaTable;
