import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/locationContext";

import { SearchContainer } from "./searchStyles";

export const Search = () => {
  const { onSearch } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    onSearch(searchQuery);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search Restaurant Location"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
          onSearch(searchQuery);
        }}
      />
    </SearchContainer>
  );
};
