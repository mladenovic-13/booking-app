import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "./buttons/PrimaryButton";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DateFromTo from "./funtional/DateFromTo";
import PersonOptions from "./funtional/PersonOptions";

const HederSearch: React.FC = () => {
  // Date states
  const defaultDate: PickDate = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const [date, setDate] = useState<PickDate[]>([defaultDate]);
  const [openDate, setOpenDate] = useState<boolean>(false);

  // Option states
  const defaultOptions: Option = { adult: 1, children: 0, room: 1 };
  const [options, setOptions] = useState<Option>(defaultOptions);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

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
      <DateFromTo
        date={date}
        setDate={setDate}
        openDate={openDate}
        setOpenDate={setOpenDate}
      />
      <PersonOptions
        options={options}
        setOptions={setOptions}
        openOptions={openOptions}
        setOpenOptions={setOpenOptions}
      />
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
  color: ${(p: any) => p.theme.color["primary-dark"]};
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
  z-index: 999;
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

export default HederSearch;
