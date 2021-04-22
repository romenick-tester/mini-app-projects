import React from "react";
import { useGlobalContext } from "../assets/context";

const Stories = () => {
  const { loading, error, stories } = useGlobalContext();

  if(loading) {
    return <div className="loading"></div>
  }

  console.log(stories);

  return (
    <>
    <h2>stories component</h2>
    {error.show && <h4>{error.msg}</h4> }
    </>
  )
}

export default Stories;
