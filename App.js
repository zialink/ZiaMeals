import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.search}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
      ios: {
        marginTop: 0,
      },
      default: {
        marginTop: 20,
        marginBottom: 20,
      },
    }),
  },
  search: {
    flex: 1,
    backgroundColor: "green",
    padding: 20,
  },
  list: {
    flex: 8,
    backgroundColor: "blue",
    padding: 20,
  },
});
