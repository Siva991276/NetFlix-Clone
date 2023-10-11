import React from "react";
import { tabLabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => {
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>;
  };
  return (
    <div>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
        </div>
      </section>
    </div>
  );
};

export default Tabs;
