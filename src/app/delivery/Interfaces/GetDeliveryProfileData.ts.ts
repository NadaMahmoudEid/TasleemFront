import { GetEducationLevelDTO } from "./GetEducationDTO";

export interface GetDeliveryProfileData
{
  id:string;
  fullName:string;
  address:string;
  profileImg:any;
  overView:string;
  yearExperinces:number;
  educationLevelDTO:GetEducationLevelDTO;
  skills:string[];
  languges:string[];

}
export { GetEducationLevelDTO };

