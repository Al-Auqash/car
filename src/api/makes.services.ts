import httpCommon from "../http-common";

class MakesService {
   getAllMakes() {
      return httpCommon.get("/vehicles/GetAllMakes?format=json");
   }

   getMakesByManufacturer(manufacturer: number | string = "hon") {
      return httpCommon.get(
         `/vehicles/GetMakeForManufacturer/${manufacturer}?format=json`
      );
   }

   getMakesByManufacturerAndYear(
      manufacturer: number | string = "hon",
      year: number = 2013
   ) {
      return httpCommon.get(
         `/vehicles/GetMakesForManufacturerAndYear/${manufacturer}?year=${year}&format=json`
      );
   }

   getMakesByVehicleType(vehicleType: number | string = "car") {
      return httpCommon.get(
         `/vehicles/GetMakesForVehicleType/${vehicleType}?format=json`
      );
   }
}

export default new MakesService();
