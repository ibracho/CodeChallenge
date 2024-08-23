import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";

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
        <ThemedText type="title">League of Legends eSports News!</ThemedText>
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
        <Collapsible title="Learn about the exciting updates coming to LoL Esports in 2025">
          <ThemedText style={styles.para}>
            In the spirit of evolving LoL Esports towards a brighter future,
            we’re unveiling a series of enhancements for 2025 that we believe
            will make our sport more exciting and competitive for fans and pros:
          </ThemedText>
          <ThemedText>{" \u25CF New, third international event"}</ThemedText>
          <ThemedText>
            {" \u25CF Innovative “Fearless Draft” game mode in Tier-1 play"}
          </ThemedText>
          <ThemedText>
            {" \u25CF Unified split schedule for all leagues"}
          </ThemedText>
          <ThemedText>
            {
              " \u25CF Proposed multi-region leagues in Asia-Pacific(APAC) and Americas"
            }
          </ThemedText>
          <ThemedText>
            {" \u25CF Experiment with “Guest Team” slots/promotion-relegation"}
          </ThemedText>
          <ThemedText>
            {" \u25CF New international event league slots."}
          </ThemedText>
        </Collapsible>
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
  para: {
    fontStyle: "italic",
    marginBottom: 8,
  },
});
