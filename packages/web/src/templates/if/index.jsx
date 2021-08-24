import React from "react";

/** @param {{test: boolean}} props */
const If = (props) => {
  if (props.test) return props.children;
  return false
};

export default If;
