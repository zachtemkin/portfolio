import React from "react";
import { pullQuote } from "./pullQuote.module.scss";

const PullQuote = ({ children }) => {
  return <div className={pullQuote}>{children}</div>;
};

export default PullQuote;
