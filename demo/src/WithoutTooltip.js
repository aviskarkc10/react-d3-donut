import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function WithoutTooltip() {
  return (
    <div className="example-container">
      <h2>5. Without tooltip</h2>
      <div></div>
      <div className="chart-container">
        <DonutChart
          innerRadius={0}
          outerRadius={100}
          transition={true}
          displayTooltip={false}
          strokeWidth={3}
          svgClass="example5"
          pieClass="pie5"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
  innerRadius={90}
  outerRadius={100}
  transition={true}
  svgClass="example5"
  pieClass="pie5"
  displayTooltip={true}
  strokeWidth={3}
  data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default WithoutTooltip;
