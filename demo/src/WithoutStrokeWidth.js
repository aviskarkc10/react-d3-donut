import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function WithoutStrokeWidth() {
  return (
    <div className="example-container">
      <h2>3. Without stroke width</h2>
      <div></div>
      <div className="chart-container">
        <DonutChart
          innerRadius={90}
          outerRadius={100}
          transition={true}
          displayTooltip={true}
          strokeWidth={0}
          svgClass="example3"
          pieClass="pie3"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
   innerRadius={90}
   outerRadius={100}
   transition={true}
   svgClass="example3"
   pieClass="pie3"
   displayTooltip={true}
   strokeWidth={0}
   data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default WithoutStrokeWidth;
