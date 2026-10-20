import Cabecera from "@/components/Cabecera";
import Contenido from "@/components/Contenido";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Cabecera></Cabecera>
      <Contenido></Contenido>
      <Text style={styles.saludo}>hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  saludo: {
    color: "white",
  },
});
