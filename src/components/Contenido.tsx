import { Image, StyleSheet, Text, View } from "react-native";

export default function Contenido() {
  return (
    <View style={styles.conte}>
      <View style={styles.ti}>
        <Text style={styles.titulo}>Crypt</Text>
        <Text style={styles.titulo2}>X</Text>
      </View>
      <Image
        style={styles.imagen}
        source={require("@/assets/images/imagen.png")}
      ></Image>
      <Text style={styles.sub1}>Jump start your crypto portfolio</Text>
      <Text style={styles.sub2}>
        Take your investment portfolio to next level
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sub1: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: 32,
    maxWidth: 300,
    left: 24,
  },
  sub2: {
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 14,
    maxWidth: 200,
    left: 24,
  },
  conte: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  imagen: {
    width: 300.5,
    height: 300.5,
    left: 96.75,
  },
  ti: {
    display: "flex",
    flexDirection: "row",
    left: 24,
  },
  titulo: {
    color: "white",
    fontSize: 64,
  },
  titulo2: {
    color: "#964ae7",
    fontSize: 64,
    fontWeight: 700,
  },
});
