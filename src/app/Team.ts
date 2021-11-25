export class Team {
  teamName?: string;
  teamNumber?: number;
  autoParkingType: string = "NONE";
  autoFreightPlacedInStorageUnit: number = 0;
  autoFreightPlacedOnShippingHub: number = 0;
  barcodeDetermination: string = "NONE";
  teleopFreightPlacedInStorageUnit: number = 0;
  teleopShippingHubLevel: string = "NONE";
  teleopFreightPlacedInTeamShippingHub: number = 0;
  teleopFreightPlacedInSharedShippingHub: number = 0;
  endDucksOrShippingElementDelivered: number = 0;
  endCanCap: boolean = false;
  endParkingType: string = "NONE";
  notes: string = ""
  robotDescription: string = "CANNOT_GO_OVER_BARRIER_13_INCH"

  constructor() {
  }
}
