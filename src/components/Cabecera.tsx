import { Image, StyleSheet, Text, View } from "react-native";

export default function Cabecera() {
  return (
    <View style={styles.conte}>
      <Text style={styles.hora}>09:41</Text>
      <View style={styles.iconos}>
        <Image
          source={require("@/assets/images/Cellular_Connection.png")}
        ></Image>
        <Image source={require("@/assets/images/Wifi.png")}></Image>
        <Image source={require("@/assets/images/Battery.png")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conte: {
    padding: 15,
    paddingTop: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconos: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  hora: {
    color: "white",
  },
});
