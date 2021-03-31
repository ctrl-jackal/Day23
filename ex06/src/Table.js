import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

// Practicing destructuring on this: object which table recives is props or x or whatever, and inside thise props we have properties like characteData and removeChar which could be used here with simple destructure or adding different names
// const Table = (x) => {
//   const { characterData: DATA, removeCharacter: REMOVE } = x;

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      {/* <TableBody characterData={DATA} removeCharacter={REMOVE} /> */}
    </table>
  );
};

export default Table;
