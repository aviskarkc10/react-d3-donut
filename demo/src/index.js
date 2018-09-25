import React, { Component } from 'react';
import { render } from 'react-dom';

import Example from '../../src';

const DONUT_CHART_DATA = [
  { name: 'On track', count: 10, color: '#00A99D' },
  { name: 'At risk', count: 20, color: '#E89F74' },
  { name: 'Off track', count: 30, color: '#DA5B41' },
  { name: 'NA', count: 40, color: '#9AA4AF' }
];

class Demo extends Component {
  render() {
    return <div>
      <Example
        innerRadius={9}
        outerRadius={20}
        displayCenterText={false}
        transition={true}
        displayTooltip={true}
        data={DONUT_CHART_DATA} />
    </div>;
  }
}

render(<Demo />, document.querySelector('#demo'));
