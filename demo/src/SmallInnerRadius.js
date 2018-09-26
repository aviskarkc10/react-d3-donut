import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function SmallInnerRadius() {
  return (
    <div className="example-container">
      <h2>6. Smaller inner radius</h2>
      <div></div>
      <div className="chart-container">
        <DonutChart
          innerRadius={70}
          outerRadius={100}
          transition={true}
          displayTooltip={true}
          strokeWidth={3}
          svgClass="example6"
          pieClass="pie6"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
   innerRadius={70}
   outerRadius={100}
   transition={true}
   svgClass="example6"
   pieClass="pie6"
   displayTooltip={true}
   strokeWidth={3}
   data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default SmallInnerRadius;
