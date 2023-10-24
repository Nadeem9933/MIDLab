import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Nadeem = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchDataAndSaveToStorage = async () => {
      const storedData = await AsyncStorage.getItem('bitcoinData');

      if (storedData) {
        
        setBitcoinData(JSON.parse(storedData));
		console.log("data Hase been found in local db");
      } else {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        await AsyncStorage.setItem('bitcoinData', JSON.stringify(data));
        setBitcoinData(data);
    }
};

fetchDataAndSaveToStorage();
}, []);

return bitcoinData;
};

export default Nadeem;