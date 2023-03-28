import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MajorExplorer />
    </div>
  );
}

function MajorExplorer() {
  return (
    <div id="major-explorer">
      <ManageMajorsBar />
      <MajorGraph />
      <StatsColumn />
    </div>
  );
}

function ManageMajorsBar() {
  return (
    <div id="manage-majors-bar" className="container">
      <input placeholder="Add a major"></input>
      <Tag />
      <Tag />
    </div>
  );
}

function Tag() {
  return <div className="tag">Tag</div>;
}

function MajorGraph() {
  return (
    <div id="major-graph" className="container">
      This is the Major Graph
    </div>
  );
}

function StatsColumn() {
  return (
    <div id="major-stats" className="container">
      This is the Stats Column
    </div>
  );
}

export default App;
