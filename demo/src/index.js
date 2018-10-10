import './styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

import PieChart from './PieChart';
import DataShape from './DataShape';
import PropsTable from './PropsTable';
import BasicExample from './BasicExample';
import WithoutTooltip from './WithoutTooltip';
import SmallerInnerRadius from './SmallInnerRadius';
import WithoutTransition from './WithoutTransition';
import WithoutStrokeWidth from './WithoutStrokeWidth';
import WithCustomTooltipClass from './WithCustomTooltipClass';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>REACT-D3-DONUT</h1>
        <div>
          <h2>Import the component.</h2>
          <div className="code-block">{`import DonutChart from 'react-d3-donut';`}</div>
        </div>
        <div>
          <PropsTable />
          <DataShape />
        </div>
        <BasicExample />
        <WithoutTransition />
        <WithoutStrokeWidth />
        <PieChart />
        <WithoutTooltip />
        <SmallerInnerRadius />
        <WithCustomTooltipClass />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
