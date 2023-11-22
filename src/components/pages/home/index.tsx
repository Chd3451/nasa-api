import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { format, sub } from "date-fns";

import api from "../../../utils/api";
import TodaysImage from "../../molecules/daily-image";
import LastWeekImages from "../../organism/last-week";
import Header from "../../molecules/header";

export default function Home() {
  const [todaysImage, setTodaysImage] = useState();
  const [lastWeekImage, setLastWeekImage] = useState();

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await api();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };

    const loadLastWeekImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const WeekAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastWeekImageResponse = await api(
          `&start_date=${WeekAgoDate}&end_date=${todaysDate}`
        );
        setLastWeekImage(lastWeekImageResponse);
      } catch (error) {
        console.log(error);
        setLastWeekImage(undefined);
      }
    };

      loadTodaysImage().catch(null);
      loadLastWeekImage().catch(null);
  }, []);
  return (
      <View>
          <Text style={styles.texto}>Home</Text>
      <Header />
          <TodaysImage {...todaysImage} />
          <LastWeekImages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 20,
    }
});
