import React from "react";
import EmployeeData from "./EmployeeData"; // Assuming EmployeeData is defined in a separate file
import CourseGoal from "./CourseGoal";
import BrightText from "./BrightText";
import Blog from "./Blog";
import MovieGrid from "./MovieGrid";
import Increment from "./Increament";
import IncrementDecrement from "./IncreamentDecrement";
import Apple from "./Apple";
import Discount from "./Discount";
import DataDisplay from "./DataDisplay";

function App() {
  const Employee = {
    id: 111,
    name: "Ratan",
    salary: 1000.45
  };

  return (
    <>
      <h1>Done by project</h1>
      <EmployeeData {...Employee} /> 
      <CourseGoal title="Learn React" description="In depth" />
      <CourseGoal title="About Ratan sir" description="Ratan sir nice" />
      <BrightText color="red" />
      <BrightText color="green" />
      <BrightText color="blue" />
      <h1>All blogs of the components</h1>
      <Blog />
      <MovieGrid />
      <Increment />
      <IncrementDecrement />
      <Apple />
      <Discount />
      <DataDisplay />

    </>
  );
}

export default App;
