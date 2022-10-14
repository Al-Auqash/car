import httpCommon from "../http-common";

class VehicleService {
   getVehicleTypesByName(vehicleName: number | string = "mercedes") {
      return httpCommon.get(
         `/vehicles/GetVehicleTypesForMake/${vehicleName}?format=json`
      );
   }

   getVehicleTypesByMakeId(makeId: number = 450) {
      return httpCommon.get(
         `/vehicles/GetVehicleTypesForMakeId/${makeId}?format=json`
      );
   }

   getVehicleVariablesList() {
      return httpCommon.get("/vehicles/GetVehicleVariableList?format=json");
   }

   getVehicleVariablesValuesList(variableValue: number | string = 2) {
      return httpCommon.get(
         `/vehicles/GetVehicleVariableValuesList/${variableValue}`
      );
   }
}

export default new VehicleService();
