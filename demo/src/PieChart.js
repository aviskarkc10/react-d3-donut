import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function PieChart() {
  return (
    <div className="example-container">
      <h2>4. A pie chart</h2>
      <div></div>
      <div className="chart-container">
        <DonutChart
          innerRadius={0}
          outerRadius={100}
          transition={true}
          displayTooltip={true}
          strokeWidth={3}
          svgClass="example4"
          pieClass="pie4"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
  innerRadius={0}
  outerRadius={100}
  transition={true}
  svgClass="example4"
  pieClass="pie4"
  displayTooltip={true}
  strokeWidth={3}
  data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default PieChart;
