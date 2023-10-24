import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View,FlatList } from "react-native";

//import Nadeem from "../CustomHooks/Nadeem";
import Nadeem from "../CustomHooks/Nadeem";
const ApiComponent = () => {

	const { fa20_bse_047 } = Nadeem();
	useEffect(() => {
		fa20_bse_047('https://api.coindesk.com/v1/bpi/currentprice.json');

	}, []);

	return (
		<View>

			<Text>Check the console for API response</Text>
			<FlatList
				data={data}
				 renderItem={renderItem}
				
			/>
		</View>
	);
};

export default ApiComponent;
