import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
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
import { Options } from "../../styles/OptionStyle";

const List: React.FC = () => {
  // PICK DATE
  interface PickDate {
    startDate: Date;
    endDate: Date;
    key: string;
  }
  const [date, setDate] = useState<PickDate[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDateIn, setOpenDateIn] = useState<boolean>(false);
  const [openDateOut, setOpenDateOut] = useState<boolean>(false);

  // OPTIONS
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  enum OptionType {
    ADULT = 1,
    CHILDREN,
    ROOM,
  }

  interface Option {
    adult: number;
    children: number;
    room: number;
  }
  const [options, setOptions] = useState<Option>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleIncrease = (optionType: OptionType) => {
    switch (optionType) {
      case OptionType.ADULT:
        setOptions((prev) => ({ ...prev, adult: prev.adult + 1 }));
        break;
      case OptionType.CHILDREN:
        setOptions((prev) => ({ ...prev, children: prev.children + 1 }));
        break;
      case OptionType.ROOM:
        setOptions((prev) => ({ ...prev, room: prev.room + 1 }));
        break;

      default:
        break;
    }
  };
  const handleDecrease = (optionType: OptionType) => {
    switch (optionType) {
      case OptionType.ADULT:
        if (options.adult > 1)
          setOptions((prev) => ({ ...prev, adult: prev.adult - 1 }));
        break;
      case OptionType.CHILDREN:
        if (options.children > 0)
          setOptions((prev) => ({ ...prev, children: prev.children - 1 }));
        break;
      case OptionType.ROOM:
        if (options.room > 1)
          setOptions((prev) => ({ ...prev, room: prev.room - 1 }));
        break;

      default:
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Header page="list" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <h1 className="title">Search</h1>
            <p>Destination/property name:</p>
            <div className="input">
              <FontAwesomeIcon className="icon" icon={faSearch} />
              <input className="inputInput" type="text" name="" id="" />
            </div>
            <p>Check-in date</p>
            <div className="input">
              <FontAwesomeIcon
                onClick={() => setOpenDateIn(!openDateIn)}
                className="icon"
                icon={faCalendarDays}
              />
              <p
                onClick={() => setOpenDateIn(!openDateIn)}
                className="inputTxt"
              >
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
            <div className="input">
              <p
                onClick={() => setOpenOptions(!openOptions)}
                className="inputTxt"
              >
                {options.adult} adult &#183; {options.children} children &#183;{" "}
                {options.room} room
              </p>
              {openOptions && (
                <Options top={"35px"}>
                  <div className="option">
                    <span>Adult</span>
                    <div>
                      <button
                        className="counterBtn"
                        onClick={() => handleDecrease(OptionType.ADULT)}
                      >
                        -
                      </button>
                      <span>{options.adult}</span>
                      <button
                        className="counterBtn"
                        onClick={() => handleIncrease(OptionType.ADULT)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option">
                    <span>Children</span>
                    <div>
                      <button
                        className="counterBtn"
                        onClick={() => handleDecrease(OptionType.CHILDREN)}
                      >
                        -
                      </button>
                      <span>{options.children}</span>
                      <button
                        className="counterBtn"
                        onClick={() => handleIncrease(OptionType.CHILDREN)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option">
                    <span>Room</span>
                    <div>
                      <button
                        className="counterBtn"
                        onClick={() => handleDecrease(OptionType.ROOM)}
                      >
                        -
                      </button>
                      <span>{options.room}</span>
                      <button
                        className="counterBtn"
                        onClick={() => handleIncrease(OptionType.ROOM)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </Options>
              )}
              <FontAwesomeIcon
                onClick={() => setOpenOptions(!openOptions)}
                className="icon"
                icon={faAngleDown}
              />
            </div>
            <button className="searchBtn">Search</button>
          </ListSearch>
          <ListResult></ListResult>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;
const ListSearch = styled.div`
  flex: 1;
  padding: 20px 16px;
  border-radius: 5px;
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
    background-color: ${(p: any) => p.theme.color["primary-lighter"]};
    border: 1px solid ${(p: any) => p.theme.color["primary-dark"]};
    cursor: pointer;
    font-weight: 500;
    color: ${(p: any) => p.theme.color["primary-dark"]};
    border-radius: 3px;
  }
  .date {
    position: absolute;
    top: 35px;
    z-index: 999;
  }
`;
const ListResult = styled.div`
  flex: 3;
  height: 100px;
  background-color: black;
`;

export default List;
