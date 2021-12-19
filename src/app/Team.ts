export class Team {
  teamName?: string;
  teamNumber?: number;
  autoParkingType: string = "NONE";
  autoFreightPlacedInStorageUnit: number = 0;
  autoFreightPlacedOnShippingHub: number = 0;
  barcodeDetermination: string = "NONE";
  autoCarousel: boolean = false;
  teleopFreightPlacedInStorageUnit: number = 0;
  teleopShippingHubLevel: string = "NONE";
  teleopFreightPlacedInTeamShippingHub: number = 0;
  teleopFreightPlacedInSharedShippingHub: number = 0;
  endDucksOrShippingElementDelivered: number = 0;
  endCanCap: boolean = false;
  endParkingType: string = "NONE";
  notes: string = ""
  robotDescription: string = "CANNOT_GO_OVER_BARRIER_13_INCH"
  autoTotal: number = 0;
  teleopTotal: number = 0;
  endTotal: number = 0;
  total: number = 0

  constructor() {
  }

  public calculateAutoPoints(): void {
    if (this.autoCarousel) {
      this.autoTotal += 10;
    }

    if (this.autoParkingType == "PARKING_IN_STORAGE_UNIT_PARTIAL") {
      this.autoTotal += 3;
    } else if (this.autoParkingType == "PARKING_IN_STORAGE_UNIT_COMPLETELY") {
      this.autoTotal += 6;
    } else if (this.autoParkingType == "PARKING_IN_WAREHOUSE_PARTIAL") {
      this.autoTotal += 5;
    } else if (this.autoParkingType == "PARKING_IN_WAREHOUSE_COMPLETELY") {
      this.autoTotal += 10;
    }

    if (this.barcodeDetermination == "USING_DUCK") {
      this.autoTotal += 10;
    } else if (this.barcodeDetermination == "USING_TEAM_ELEMENT") {
      this.autoTotal += 20;
    }
    this.autoTotal += this.autoFreightPlacedInStorageUnit * 2;
    this.autoTotal += this.autoFreightPlacedInStorageUnit * 6;

  }

  public calculateTeleop(): void {
    this.teleopTotal += this.teleopFreightPlacedInStorageUnit;
    if (this.teleopShippingHubLevel == "LEVEL_ONE") {
      this.teleopTotal += this.teleopFreightPlacedInTeamShippingHub * 2;
    } else if (this.teleopShippingHubLevel == "LEVEL_TWO") {
      this.teleopTotal += this.teleopFreightPlacedInTeamShippingHub * 4;
    } else if (this.teleopShippingHubLevel == "LEVEL_THREE") {
      this.teleopTotal += this.teleopFreightPlacedInTeamShippingHub * 6;
    }
    this.teleopTotal += this.teleopFreightPlacedInSharedShippingHub * 4;
  }

  public calculateEndgame(): void {
    this.endTotal += this.endDucksOrShippingElementDelivered * 6;
    if (this.autoParkingType == "PARKING_IN_WAREHOUSE_PARTIAL") {
      this.autoTotal += 3;
    } else if (this.autoParkingType == "PARKING_IN_WAREHOUSE_COMPLETELY") {
      this.autoTotal += 6;
    }
    if (this.endCanCap) {
      this.endTotal += 15;
    }
  }

  public calculateTotal() {
    this.total += this.autoTotal;
    this.total += this.teleopTotal;
    this.total += this.endTotal;
  }
}
