import httpCommon from "../http-common";

class ManufacturersService {
   getAllManufacturers() {
      return httpCommon.get("/vehicles/GetAllMakes?format=json");
   }

   getAllManufacturersTypeIntermediate(
      manufacturerType: string = "Intermediate"
   ) {
      return httpCommon.get(
         `/vehicles/GetAllManufacturers?ManufacturerType=${manufacturerType}`
      );
   }

   getManufacturersDetails(manufacturer: number | string = "honda") {
      return httpCommon.get(
         `/vehicles/GetManufacturerDetails/${manufacturer}?format=json`
      );
   }
}

export default new ManufacturersService();
