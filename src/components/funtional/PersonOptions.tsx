import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { Options } from "../../styles/OptionStyle";

interface Props {
  options: Option;
  setOptions: React.Dispatch<React.SetStateAction<Option>>;
  openOptions: boolean;
  setOpenOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonOptions = ({
  options,
  setOptions,
  openOptions,
  setOpenOptions,
}: Props) => {
  enum OptionType {
    ADULT = 1,
    CHILDREN,
    ROOM,
  }
  // Option helpers
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
      <FontAwesomeIcon icon={faPerson} className="icon" />
      <span onClick={() => setOpenOptions(!openOptions)} className="text">
        {options.adult} adult &#183; {options.children} children &#183;{" "}
        {options.room} room
      </span>
      {openOptions && (
        <Options top={"55px"}>
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
    </Container>
  );
};

const Container = styled.div`
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
export default PersonOptions;
