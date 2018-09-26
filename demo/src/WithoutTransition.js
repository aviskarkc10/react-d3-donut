import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function WithoutTransition() {
  return (
    <div className="example-container">
      <h2>2. Without transition</h2>
      <div className="chart-container">
        <DonutChart
          innerRadius={90}
          outerRadius={100}
          transition={false}
          displayTooltip={true}
          strokeWidth={3}
          svgClass="example2"
          pieClass="pie2"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
  innerRadius={90}
  outerRadius={100}
  transition={false}
  svgClass="example2"
  pieClass="pie2"
  displayTooltip={true}
  strokeWidth={3}
  data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default WithoutTransition;
