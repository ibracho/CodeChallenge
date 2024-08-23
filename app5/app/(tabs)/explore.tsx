import { StyleSheet, Image, Platform } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const [nbaData, setNbaData] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from NBA backend server
    const fetchNbaData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/teams");
        setNbaData(response.data);
      } catch (error) {
        console.error("Error fetching NBA data:", error);
        setError("Failed to fetch NBA data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNbaData();
  }, []);

  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#00E5FA", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/lolesports.jpeg")}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView>
        <ThemedText type="title">League of Legends Teams!</ThemedText>
      </ThemedView>
      <ThemedText>Best Teams ever:</ThemedText>
      <ThemedView style={styles.container}>
        {nbaData &&
          nbaData.map((team) => (
            <ThemedView key={team._id} style={styles.teamContainer}>
              <Image source={{ uri: team.imagePath }} style={styles.teamLogo} />
              <ThemedText style={styles.teamName}>{team.name}</ThemedText>
              <ThemedText style={styles.teamRecord}>
                Wins: {team.wins} | Losses: {team.losses}
              </ThemedText>
            </ThemedView>
          ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  teamContainer: {
    margin: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: 150,
  },
  teamLogo: {
    width: 100,
    height: 100,
    marginLeft: 15,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  teamRecord: {
    fontSize: 14,
  },
});
