import React from 'react';

import { DONUT_CHART_DATA } from './constants';

import DonutChart from '../../src';

function WithCustomToolTipClass() {
  return (
    <div className="example-container">
      <h2>7. With custom css class for tooltip</h2>
      <div></div>
      <div className="chart-container">
        <DonutChart
          innerRadius={90}
          outerRadius={100}
          transition={true}
          displayTooltip={true}
          strokeWidth={0}
          svgClass="example7"
          pieClass="pie7"
          tooltipClass="custom-tooltip"
          data={DONUT_CHART_DATA} />
      </div>
      <div className="code-block example-block">
        <pre>
          {`<DonutChart
   innerRadius={90}
   outerRadius={100}
   transition={true}
   svgClass="example7"
   pieClass="pie7"
   displayTooltip={true}
   strokeWidth={0}
   tooltipClass="custom-tooltip"
   data={data} />`}
        </pre>
      </div>
    </div>
  );
}

export default WithCustomToolTipClass;
