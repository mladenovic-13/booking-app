import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

interface Props {
  date: PickDate[];
  setDate: React.Dispatch<React.SetStateAction<PickDate[]>>;
  openDate: boolean;
  setOpenDate: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateFromTo = ({ date, setDate, openDate, setOpenDate }: Props) => {
  return (
    <Search>
      <FontAwesomeIcon icon={faCalendarDays} className="icon" />
      <span onClick={() => setOpenDate(!openDate)} className="text">{`${format(
        date[0].startDate,
        "MM/dd/yyyy"
      )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={(item: any) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
        />
      )}
    </Search>
  );
};

const Search = styled.div`
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

export default DateFromTo;
