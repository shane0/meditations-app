/* eslint-disable no-undef */
import React from "react";

let today = new Date();
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let dd = String(today.getDate()).padStart(2, "0");
let isoDate = yyyy + "," + mm + "," + dd;
let julianDayNo = daysIntoYear(new Date(isoDate));

//  julian week number
let startDate = new Date(today.getFullYear(), 0, 1);
let days = Math.floor((today - startDate) / (24 * 60 * 60 * 1000));
let weekNumber = Math.ceil(days / 7);

function daysIntoYear(date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

function daysLeft(julianDay) {
  return 365 - julianDay;
}

function weeksLeft(julianWeek) {
  return 52 - julianWeek;
}

function JulianYear() {
  return (
    <div>
      the julian year number is <br />
      {yyyy}
    </div>
  );
}

function JulianWeek() {
  return (
    <div style={{ color: "blue" }}>
      the julian week number is <br />
      {weekNumber} of 52
      <br />
      {weeksLeft(weekNumber)} weeks left in {yyyy}
    </div>
  );
}

function JulianDay() {
  return (
    <div>
      the julian day number is <br />
      {julianDayNo} of 365
      <br />
      {daysLeft(julianDayNo)} days left in {yyyy}
    </div>
  );
}

// // iso date yyyy-mm-dd
// let today = new Date();
// let yyyy = today.getFullYear();
// let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// let dd = String(today.getDate()).padStart(2, "0");
// today = yyyy + "-" + mm + "-" + dd;
// test
// [new Date(2016, 0, 1), new Date(2016, 1, 1), new Date(2016, 2, 1), new Date(2016, 5, 1), new Date(2016, 11, 31)]
//     .forEach(d =>
//         console.log(`${d.toLocaleDateString()} is ${daysIntoYear(d)} days into the year`));

//  julian week number
// currentDate = new Date();
// let startDate = new Date(today.getFullYear(), 0, 1);
// let days = Math.floor((today - startDate) / (24 * 60 * 60 * 1000));
// let weekNumber = Math.ceil(days / 7);

export { JulianYear, JulianWeek, JulianDay };
