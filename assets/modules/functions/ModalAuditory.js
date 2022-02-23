import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
const varA=100;
export default function ModalAuditory ({trues,level,voprosy}) {

  
  const procent = (trues)=>{
    let rez =[]
    rez.push(Math.floor(Math.random() * (99 - 50)) + 50);
    rez.push(Math.floor(Math.random() * (99 - rez[0])));
    rez.push(Math.floor(Math.random() * (99 - rez[0]-rez[1])));
    rez.push(100-rez[0]-rez[1]-rez[2]);
    [rez[0], rez[trues]] = [rez[trues], rez[0]];
    return rez
  }
  const graphProcent=procent(trues)
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
                data: [graphProcent[0],graphProcent[1],graphProcent[2],graphProcent[3]],
                type: "bar"
              }
            ]
          }}
          backgroundColor="rgba(0, 0, 0, 0.1)"
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  chartContainer: {
    width:'90%', 
    height:'50%'
  }
});