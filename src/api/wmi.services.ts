import httpCommon from "../http-common";

class WmiService {
   getDecodeWmi() {
      return httpCommon.get("/vehicles/DecodeWMI/1FD?format=json");
   }

   getDecodeWmiByManufacturer(manufacturer: number | string = "honda") {
      return httpCommon.get(
         `/vehicles/GetWMIsForManufacturer/${manufacturer}?format=json`
      );
   }

   getDecodeWmiByManufacturerAndTypeCar(
      manufacturer: number | string = "honda",
      vehicleType: string = "car"
   ) {
      return httpCommon.get(
         `/vehicles/GetWMIsForManufacturer/${manufacturer}?vehicleType=${vehicleType}&format=json`
      );
   }
}

export default new WmiService();
