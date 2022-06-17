/// <reference types="react-scripts" />
declare module "styled-components";
declare module "react-date-range";

interface Option {
  adult: number;
  children: number;
  room: number;
}
interface PickDate {
  startDate: Date;
  endDate: Date;
  key: string;
}
