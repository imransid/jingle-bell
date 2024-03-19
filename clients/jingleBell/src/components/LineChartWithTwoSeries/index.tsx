import React, { type FC } from 'react';
import { scale } from 'react-native-size-matters';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer
} from 'victory-native';

interface LineChartWithTwoSeriesProps {
  dataSet: Array<{ x: number; y: number }>; // Adjust the type based on your actual data structure
  dataSet2: Array<{ x: number; y: number }>; // Adjust the type based on your actual data structure
  lineColor1: string;
  lineColor2: string;
  width: number;
  height: number;
}

const LineChartWithTwoSeries: FC<LineChartWithTwoSeriesProps> = ({
  dataSet,
  dataSet2,
  lineColor1,
  lineColor2,
  width,
  height
}) => {
  return (
    <VictoryChart
      domainPadding={{ x: [20, 20], y: [20, 20] }}
      containerComponent={<VictoryVoronoiContainer />}
      width={width}
      height={height}>
      <VictoryLegend
        x={10}
        y={10}
        orientation="horizontal"
        gutter={20}
        data={[
          {
            name: 'Today',
            symbol: { fill: lineColor1 },
            labels: { fill: '#FFFFFF' }
          },
          {
            name: 'Previous Day',
            symbol: { fill: lineColor2 },
            labels: { fill: '#FFFFFF' }
          }
        ]}
      />
      <VictoryLine
        data={dataSet}
        interpolation="natural"
        style={{ data: { stroke: lineColor1 } }}
      />
      <VictoryLine
        data={dataSet2}
        interpolation="natural"
        style={{ data: { stroke: lineColor2 } }}
      />
      <VictoryScatter
        data={dataSet}
        style={{
          data: { fill: lineColor1 },
          labels: { fontSize: 20 }
        }}
        size={6}
        labelComponent={<VictoryTooltip renderInPortal={false} />}
        labels={({ datum }: { datum: { x: number; y: number } }) => `${datum.y}`}
      />
      <VictoryScatter
        style={{
          data: { fill: lineColor2 },
          labels: { fontSize: 20 }
        }}
        size={6}
        labelComponent={<VictoryTooltip renderInPortal={false} />}
        labels={({ datum }: { datum: { x: number; y: number } }) => `${datum.y}`}
        data={dataSet2}
      />
      <VictoryAxis
        dependentAxis
        crossAxis
        standalone={false}
        style={{
          axis: { stroke: 'rgba(255, 255, 255, 0.15)' },
          tickLabels: { fill: '#D8D8D8', fontSize: scale(6) },
          grid: { stroke: 'rgba(255, 255, 255, 0.15)' }
        }}
      />
      <VictoryAxis
        standalone={false}
        style={{
          axis: { stroke: 'rgba(255, 255, 255, 0.15)' },
          tickLabels: {
            fill: '#D8D8D8',
            fontSize: scale(6),
            letterSpacing: '0px'
          },
          grid: { stroke: 'transparent' }
        }}
      />
    </VictoryChart>
  );
};

export default LineChartWithTwoSeries;
