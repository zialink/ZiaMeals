import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Search } from "../../../search/Search";
import { RestaurantInfo } from "../../components/RestaurantInfoCard";
import { RestaurantsContext } from "../../../../services/restaurants/restaurantsContext";
import { RestaurantList, SafeView } from "./restaurantScreenStyles";
import { SearchContainer } from "../../components/restaurantStyles";
import { FavouritesBar } from "../../../favourite/components/FavouriteBar";
import { FavouritesContext } from "../../../../services/favourites/favouritesContext";
import { Loading } from "../../../../utils/loading/Loading";

export const RestaurantsScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const { restaurants, isLoading, errors } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const [loader, setLoader] = useState(false);

  const onEndReached = (page) => {
    if (next && !loader) {
      setPage(page + 1);
    }
  };

  const loadData = async () => {
    setLoader(true);
    const resp = await getData();
    setLoader(false);
  };

  return (
    <>
      <SafeView>
        <SearchContainer>
          <Search
            icon={isToggled ? "heart" : "heart-outline"}
            pressIcon={() => setIsToggled(!isToggled)}
          />
        </SearchContainer>
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        {isLoading && <Loading />}
        <RestaurantList
          data={restaurants}
          onEndReached={onEndReached}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeView>
    </>
  );
};
