import camelize from "camelize";

import { locations } from "./locationMocks";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { viewport } = geometry;
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport };
};
