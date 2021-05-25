import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../services/location/locationContext";

export const Search = ({ icon }) => {
  const { onSearch, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query) => setSearchQuery(query);

  /*  useEffect(() => {
    onSearch(searchQuery);
  }, []); */

  return (
    <Searchbar
      placeholder="Search Restaurant Location"
      onChangeText={onChangeSearch}
      icon={icon}
      value={searchQuery}
      onSubmitEditing={() => {
        onSearch(searchQuery);
      }}
    />
  );
};
