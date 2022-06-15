import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "./buttons/PrimaryButton";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const HederSearch: React.FC = () => {
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

  const [openDate, setOpenDate] = useState<boolean>(false);
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
    <Container>
      <HeaderSearchItem>
        <FontAwesomeIcon icon={faBed} className="icon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="searchInput"
        />
      </HeaderSearchItem>
      <HeaderSearchItem>
        <FontAwesomeIcon icon={faCalendarDays} className="icon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </HeaderSearchItem>
      <HeaderSearchItem>
        <FontAwesomeIcon icon={faPerson} className="icon" />
        <span onClick={() => setOpenOptions(!openOptions)} className="text">
          {options.adult} adult &#183; {options.children} children &#183;{" "}
          {options.room} room
        </span>
        {openOptions && (
          <Options>
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
      </HeaderSearchItem>
      <HeaderSearchItem>
        <PrimaryButton>Search</PrimaryButton>
      </HeaderSearchItem>
    </Container>
  );
};

const Container = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid ${(p: any) => p.theme.color["yellow"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(p: any) => p.theme.color["primary-light"]};
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .icon {
    margin-right: 10px;
  }
  .searchInput {
    padding: 5px;
    border: none;
    outline: none;
  }
  .date {
    position: absolute;
    top: 53px;
  }
`;
const Options = styled.div`
  position: absolute;
  top: 60px;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.7);
  padding: 10px;
  .option {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  .counterBtn {
    margin: 0px 5px;
  }
`;

export default HederSearch;
