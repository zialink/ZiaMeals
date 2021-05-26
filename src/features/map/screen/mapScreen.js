import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import { LocationContext } from "../../../services/location/locationContext";
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";

import { Search } from "../../search/Search";
import { Map, SearchContainer } from "../mapStyles";
import { CompactRestaurantInfo } from "../../restaurants/components/CompactRestaurantInfo";

export const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { viewport, lng, lat } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <SearchContainer>
        <Search icon="map" />
      </SearchContainer>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("Restaurants", {
                    screen: "RestaurantDetails",
                    params: { restaurant },
                  })
                }
              >
                <CompactRestaurantInfo isMap restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
