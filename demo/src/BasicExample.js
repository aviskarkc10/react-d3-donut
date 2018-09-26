import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function BasicExample() {
  return (
    <div className="example-container">
      <h2>1. Basic Example</h2>
      <div className="chart-container">
        <DonutChart
          innerRadius={90}
          outerRadius={100}
          transition={true}
          displayTooltip={true}
          strokeWidth={3}
          svgClass="example1"
          pieClass="pie1"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
  innerRadius={90}
  outerRadius={100}
  transition={true}
  svgClass="example1"
  pieClass="pie1"
  displayTooltip={true}
  strokeWidth={3}
  data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default BasicExample;
