import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarDays,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import PersonOptions from "./PersonOptions";

interface Props {
  state: any;
}
const SideSearch = ({ state }: Props) => {
  const [search, setSearch] = useState<string>(state.search);
  // PICK DATE
  const [date, setDate] = useState<PickDate[]>([
    {
      startDate: state.date[0].startDate,
      endDate: state.date[0].endDate,
      key: "selection",
    },
  ]);

  const [openDateIn, setOpenDateIn] = useState<boolean>(false);
  const [openDateOut, setOpenDateOut] = useState<boolean>(false);

  // OPTIONS
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const [options, setOptions] = useState<Option>(state.options);

  return (
    <ListSearch>
      <h1 className="title">Search</h1>
      <p>Destination/property name:</p>
      <div className="input">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="inputInput"
          type="text"
          defaultValue={search}
        />
      </div>
      <p>Check-in date</p>
      <div className="input">
        <FontAwesomeIcon
          onClick={() => setOpenDateIn(!openDateIn)}
          className="icon"
          icon={faCalendarDays}
        />
        <p onClick={() => setOpenDateIn(!openDateIn)} className="inputTxt">
          {`${format(date[0].startDate, "MM/dd/yyyy")}`}
        </p>
        {openDateIn && (
          <DateRange
            onChange={(item: any) => setDate([item.selection])}
            ranges={date}
            className="date"
          />
        )}
        <FontAwesomeIcon
          onClick={() => setOpenDateIn(!openDateIn)}
          className="icon"
          icon={faAngleDown}
        />
      </div>
      <p>Check-out date</p>
      <div className="input">
        <FontAwesomeIcon
          onClick={() => setOpenDateOut(!openDateOut)}
          className="icon"
          icon={faCalendarDays}
        />
        <p
          onClick={() => setOpenDateOut(!openDateOut)}
          className="inputTxt"
        >{`${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
        {openDateOut && (
          <DateRange
            onChange={(item: any) => setDate([item.selection])}
            ranges={date}
            className="date"
          />
        )}
        <FontAwesomeIcon
          onClick={() => setOpenDateOut(!openDateOut)}
          className="icon"
          icon={faAngleDown}
        />
      </div>
      <p>7-night stay</p>
      <PersonOptions
        options={options}
        setOptions={setOptions}
        openOptions={openOptions}
        setOpenOptions={setOpenOptions}
        style={optionsStyle}
        top={"35px"}
      />
      <button className="searchBtn">Search</button>
    </ListSearch>
  );
};
const ListSearch = styled.div`
  flex: 1;
  padding: 20px 16px;
  border-radius: 5px;
  height: 360px;
  background-color: ${(p: any) => p.theme.color["yellow"]};
  color: ${(p: any) => p.theme.color["primary-dark"]};
  p {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1px;
  }
  .title {
    margin: 5px 0 10px 0;
    font-size: 24px;
  }
  .input {
    position: relative;
    border-radius: 2px;
    outline: none;
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .inputInput {
    outline: none;
    border: none;
    padding: 10px;
    font-size: 16px;
    width: 60%;
    text-align: left;
  }
  .inputInput:focus {
    width: 80%;
  }
  .inputTxt {
    font-size: 16px;
    padding: 5px;
    font-weight: 300;
    cursor: pointer;
  }
  .icon {
    margin: 0 10px;
    cursor: pointer;
  }
  .searchBtn {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    /* background-color: ${(p: any) => p.theme.color["primary-dark"]}; */
    background-color: ${(p: any) => p.theme.color["primary-btn"]};
    border: 1px solid ${(p: any) => p.theme.color["primary-dark"]};
    cursor: pointer;
    font-weight: 500;
    color: white;
    border-radius: 3px;
  }
  .date {
    position: absolute;
    top: 35px;
    z-index: 999;
  }
`;
const optionsStyle = {
  position: "relative",
  borderRadius: "3px",
  outline: "none",
  border: "none",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "15px",
  fontSize: "15px",
  padding: "6px",
  fontWeight: "300",
  cursor: "pointer",
};
export default SideSearch;
