import { StyleSheet, Text, View } from "react-native";

export default function Boton() {
  return (
    <View>
      <Text style={styles.texto}>Get Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 115,
    paddingRight: 115,
    backgroundColor: "#6552FE",
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    borderRadius: 16,
    marginTop: 44,
  },
});
