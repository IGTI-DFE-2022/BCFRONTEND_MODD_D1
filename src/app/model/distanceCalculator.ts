import { City } from './city';

export function getDistance(origin: City, destination: City) {
  const EARTH_RADIUS = 6_371.071; // Earth
  const diffLatitudeRadians = degreesToRadians(
    destination.latitude - origin.latitude
  );
  const diffLongitudeRadians = degreesToRadians(
    destination.longitude - origin.longitude
  );
  const originLatitudeRadians = degreesToRadians(origin.latitude);
  const destinationLatitudeRadians = degreesToRadians(destination.latitude);
  const kmDistance =
    2 *
    EARTH_RADIUS *
    Math.asin(
      Math.sqrt(
        Math.sin(diffLatitudeRadians / 2) * Math.sin(diffLatitudeRadians / 2) +
          Math.cos(originLatitudeRadians) *
            Math.cos(destinationLatitudeRadians) *
            Math.sin(diffLongitudeRadians / 2) *
            Math.sin(diffLongitudeRadians / 2)
      )
    );
  console.log(
    `Distance between ${origin.name} and ${destination.name} is ${kmDistance} km`
  );
  return kmDistance;
}

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
