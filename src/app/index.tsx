import Cabecera from "@/components/Cabecera";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Cabecera></Cabecera>
      <Text style={styles.saludo}>hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  saludo: {
    color: "white",
  },
});
