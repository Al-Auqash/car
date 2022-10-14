import httpCommon from "../http-common";

class PartsService {
   getParts(
      type: number | string = 565,
      fromDate: string = "1/1/2015",
      toDate: string = "5/5/2015"
   ) {
      return httpCommon.get(
         `/vehicles/GetParts?type=${type}&fromDate=${fromDate}&toDate=${toDate}&format=json&page=1`
      );
   }

   getPartsManufacturer(
      type: number | string = 565,
      fromDate: string = "1/1/2015",
      toDate: string = "5/5/2015",
      manufacturer: number | string = "honda"
   ) {
      return httpCommon.get(
         `/vehicles/GetParts?type=${type}&fromDate=${fromDate}&toDate=${toDate}&format=json&page=1&manufacturer=${manufacturer}`
      );
   }
}

export default new PartsService();
