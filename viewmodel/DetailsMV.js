import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLayoutEffect, useState } from "react";
import { Button } from "react-native";
import Details from "../view/Details";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@mytablets", jsonValue);
  } catch (e) {
    // saving error
  }
};
export default function DetailsMV({ navigation, route }) {
  const { name, data } = route.params;
  const [value, setValue] = useState(
    name === null ? {} : data.find((item) => item.name === name)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            storeData(data.filter((item) => item.name !== name));
            navigation.goBack();
          }}
          title="Delete"
          color="red"
        />
      ),
    });
  }, [navigation, value]);

  const handleSave = () => {
    if (!value.name) return;
    if (name === null) storeData([...data, value]);
    else
      storeData(
        data.forEach((item) => {
          if (item.name === name) item = value;
        })
      );
    navigation.goBack();
  };
  return <Details value={value} onChangeValue={setValue} onSave={handleSave} />;
}
