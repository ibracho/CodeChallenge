import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#00ffff", dark: "#d40000" }}
      headerImage={
        <Image
          source={require("@/assets/images/WCS_logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">League of Legends eSports!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">the World Final 2024</ThemedText>
        <ThemedText>
          {" "}
          The
          <ThemedText type="defaultSemiBold"> 2024 </ThemedText>League of
          Legends World Final will take place on November 2 at The O2 in London!{" "}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">LCS Championship</ThemedText>
        <ThemedText>
          The LCS Championship will take place September 6-7 at the YouTube
          Theater in Los Angeles with approximately 5,000 seats
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">LoL Esports!</ThemedText>
        <ThemedText>Stay tunned for more upcoming dates!</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 200,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
