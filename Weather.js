import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Mist: {
    iconName: "weather-pouring",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "Do you know Mist?",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Thunder",
    subtitle: "Oh, shit, it makes me scared.",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Drizzle",
    subtitle: "I don't know what it is.",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Rain",
    subtitle: "Please give me water.",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Snow",
    subtitle: "아 제설 ㄱ빡치네;",
  },
  Atmosphere: {
    iconName: "weather-windy-variant",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Atmosphere",
    subtitle: "갑 Atmosphere 싸...",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear",
    subtitle: "C L E A R",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "it's  cloudy",
  },
  Dust: {
    iconName: "weather-sunset",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "thanks a lot China ㅗ",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "노래잘함",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Dust",
    "Haze",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 5,
    alignItems: "flex-start",
  },
});
