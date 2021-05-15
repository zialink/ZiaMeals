import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/locationContext";

import { SearchContainer } from "./searchStyles";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { onPressSearch } = useContext(LocationContext);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search Restaurant"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
          onPressSearch(searchQuery);
        }}
      />
    </SearchContainer>
  );
};
