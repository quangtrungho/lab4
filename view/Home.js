import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import homePropType from "../model/home.proptype";

export default function Home({ data, onCreate, onItemPress }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
      <TouchableOpacity onPress={onCreate} style={styles.create}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.footer}>Хо Куанг Чунг ИУ3-81Б hqtxxx@gmail.com</Text>
    </SafeAreaView>
  );
}

Home.propTypes = homePropType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 5,
    width: "100%",
  },
  item: {
    flex: 0.5,
    backgroundColor: "#EEE",
    margin: 5,
    borderRadius: 10,
    padding: 20,
  },
  create: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 40,
    right: 30,
    height: 60,
    backgroundColor: "#008",
    borderRadius: 100,
  },
  footer: {
    textAlign: "center",
  },
});
