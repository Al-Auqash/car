import httpCommon from "../http-common";

class ModelService {
   getModelsByMake(manufacturer: number | string = "honda") {
      return httpCommon.get(
         `/vehicles/GetModelsForMake/${manufacturer}?format=json`
      );
   }

   getModelsByMakeId(id: number = 440) {
      return httpCommon.get(`/vehicles/GetModelsForMakeId/${id}?format=json`);
   }

   getModelsByMakeAndModelYear(
      manufacturer: number | string = "honda",
      modelYear: number = 2015
   ) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeYear/make/${manufacturer}/modelyear/${modelYear}?format=json`
      );
   }

   getModelsByMakeAndVehicleType(
      manufacturer: number | string = "honda",
      vehicleType: string = "truck"
   ) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeYear/make/${manufacturer}/vehicletype/${vehicleType}?format=json`
      );
   }

   getModelsByMakeAndModelYearAndVehicleType(
      manufacturer: number | string = "honda",
      modelYear: number = 2015,
      vehicleType: string = "truck"
   ) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeYear/make/${manufacturer}/modelyear/${modelYear}/vehicletype/${vehicleType}?format=json`
      );
   }

   getModelsByMakeIdAndYear(makeId: number = 474, modelYear: number = 2015) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelYear}?format=json`
      );
   }

   getModelsByMakeIdAndVehicleType(
      makeId: number = 474,
      vehicleType: string = "truck"
   ) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/vehicletype/${vehicleType}?format=json`
      );
   }

   getModelsByMakeIdAndYearAndVehicleType(
      makeId: number = 474,
      modelYear: number = 2015,
      vehicleType: string = "truck"
   ) {
      return httpCommon.get(
         `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelYear}/vehicletype/${vehicleType}?format=json`
      );
   }
}

export default new ModelService();
