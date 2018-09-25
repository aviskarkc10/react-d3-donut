import React, { Component } from 'react';
import { render } from 'react-dom';

import Example from '../../src';

const DONUT_CHART_DATA = [
  { name: 'Catch tail', count: 10, color: '#00A99D' },
  { name: 'Smell own butt', count: 20, color: '#E89F74' },
  { name: 'Drool over hooman\'s food', count: 30, color: '#DA5B41' },
  { name: 'Play with hooman', count: 40, color: '#9AA4AF' }
];

class Demo extends Component {
  render() {
    return <div>
      <h1><a href="https://twitter.com/dog_feelings">Thoughts of dogs.</a></h1>
      <Example
        innerRadius={90}
        outerRadius={100}
        displayCenterText={false}
        transition={true}
        displayTooltip={true}
        strokeWidth={3}
        data={DONUT_CHART_DATA} />
    </div>;
  }
}

render(<Demo />, document.querySelector('#demo'));
