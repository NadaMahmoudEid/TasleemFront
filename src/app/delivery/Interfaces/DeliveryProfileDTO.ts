import { EducationLevelDTO } from "./export interface DeliveryProfileDTO ";

export interface DeliveryProfileDTO
{
  Id:string;
  FullName:string;
  Address:string;
  ProfileImg:any;
  OverView:string;
  YearExperinces:number;
  EducationLevelDTO:EducationLevelDTO;
  Skills:string[];
  Languges:string[];
  properties:string[];
}
