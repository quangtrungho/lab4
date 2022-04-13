import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import detailsPropTypes from "../model/details.proptype";
export default function Details({ value, onChangeValue, onSave }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, name: newText });
          }}
          value={value.name}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Branch</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, brand: newText });
          }}
          value={value.brand}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Launch</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, launch: newText });
          }}
          value={value.launch}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Display</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, display: newText });
          }}
          value={value.display}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Ram</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, ram: newText });
          }}
          value={value.ram}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Chipset</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, chipset: newText });
          }}
          value={value.chipset}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Camera</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, camera: newText });
          }}
          value={value.camera}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Battery</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newText) => {
            onChangeValue({ ...value, battery: newText });
          }}
          value={value.battery}
        />
      </View>
      <TouchableOpacity onPress={onSave} style={styles.save}>
        <AntDesign name="check" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

Details.propTypes = detailsPropTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  form: {
    flex: 0.2,
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    width: 60,
  },
  input: {
    backgroundColor: "#EEE",
    width: "100%",
    marginLeft: 10,
    padding: 10,
  },
  save: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 30,
    right: 30,
    height: 60,
    backgroundColor: "#008",
    borderRadius: 100,
  },
});
