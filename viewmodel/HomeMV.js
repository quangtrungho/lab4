import { useEffect, useState } from "react";
import Home from "../view/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeMV({ navigation }) {
  const [data, setData] = useState([]);
  useFocusEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@mytablets");
        setData(jsonValue !== null ? JSON.parse(jsonValue) : []);
      } catch (e) {
        // error reading value
      }
    };
    getData();
  });
  const handleCreate = () => {
    navigation.navigate("Details", { name: null, data: data });
  };
  const handleItemPress = (item) => {
    navigation.navigate("Details", { name: item.name, data: data });
  };
  return (
    <Home data={data} onCreate={handleCreate} onItemPress={handleItemPress} />
  );
}
