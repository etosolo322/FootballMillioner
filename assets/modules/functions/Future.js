import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
const varA=100;
export default function App ({route}) {
 console.log(route.params)
    return (
      <View style={styles.chartContainer}>
        <ECharts
          option={{
            xAxis: {
              type: "category",
              data: ["A", "B", "C", "D"]
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                data: [route.params,60,10,10],
                type: "bar"
              }
            ]
          }}
          backgroundColor="rgba(93, 169, 81, 0.3)"
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  chartContainer: {
    width:'100%', 
    height:'50%'
  }
});