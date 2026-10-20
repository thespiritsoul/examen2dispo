import Boton from "@/components/Boton";
import Cabecera from "@/components/Cabecera";
import Contenido from "@/components/Contenido";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.contenido}>
      <Cabecera></Cabecera>
      <Contenido></Contenido>
      <Boton></Boton>
    </View>
  );
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#070707",
  },
});
