import React from "react";
import { StyleSheet, View, Text } from "react-native";
//import useBitcoinData from "./useBitcoinData";
import Nadeem from "./CustomHooks/Nadeem";
import { FlatList } from "react-native-web";
const App = () => {
 
  // const renderItem = ({ item }) => (
  //   <View style={styles.currencyDetail}>
  //     <Text style={styles.currency}>{item.currency}</Text>
  //     <Text style={styles.rate}>
  //       {item.details.description}: {item.details.symbol} {item.details.rate}
  //     </Text>
  //   </View>
  // );
  const bitcoinData = Nadeem();

  if (!bitcoinData) {
    return (
      <View style={styles.container}>
      <Text>Data Not found</Text>
      </View>
    );
  }

  const { time, disclaimer, chartName, bpi } = bitcoinData;

  return (
    <View style={styles.container}>
<FlatList
        data={Object.entries(bpi)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View>
            <Text >{item[0]}</Text>
            <Text style={styles.rate}>
              {item[1].description}: {item[1].symbol} {item[1].rate}
            </Text>
          </View>
        )}
      />
      <Text style={styles.mainheading}>Bitcoin Price:</Text>
 


    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  mainheading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  rate: {
    fontSize: 16,
  },
});