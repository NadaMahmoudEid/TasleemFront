import { GetclientProfileData } from './GetclientProfileData';

export interface Jobs {
  id: number;
  requiredPoints: number;
  numOfProposal: number;
  budget: number;
  details: string;
  title: string;
  countryName: string;
  cityName: string;
  addressDetails: string;
  isVerified: any;
  client: GetclientProfileData;
}
