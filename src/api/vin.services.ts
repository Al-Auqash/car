import httpCommon from "../http-common";

class VinService {
   getDecodeVin(modelYear: number = 2011) {
      return httpCommon.get(
         `/vehicles/DecodeVin/5UXWX7C5*BA?format=json&modelyear=${modelYear}`
      );
   }

   getDecodeVinFlatFomat(modelYear: number = 2011) {
      return httpCommon.get(
         `/vehicles/DecodeVinValues/5UXWX7C5*BA?format=json&modelyear=${modelYear}`
      );
   }

   getDecodeVinExtended(modelYear: number = 2011) {
      return httpCommon.get(
         `/vehicles/DecodeVinExtended/5UXWX7C5*BA?format=json&modelyear=${modelYear}`
      );
   }

   getDecodeVinExtendedFlatFomat(modelYear: number = 2011) {
      return httpCommon.get(
         `/vehicles/DecodeVinValuesExtended/5UXWX7C5*BA?format=json&modelyear=${modelYear}`
      );
   }
}

export default new VinService();
