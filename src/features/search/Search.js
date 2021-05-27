import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/locationContext";

export const Search = ({ icon, pressIcon }) => {
  const { onSearch, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search Restaurant Location"
      onChangeText={onChangeSearch}
      icon={icon}
      onIconPress={pressIcon}
      value={searchQuery}
      onSubmitEditing={() => {
        onSearch(searchQuery);
      }}
    />
  );
};
