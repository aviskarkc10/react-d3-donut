import React, { Component } from 'react';
import { render } from 'react-dom';

import DonutChart from '../../src';

const DONUT_CHART_DATA = [
  { name: 'Catch tail', count: 10, color: '#00A99D' },
  { name: 'Smell own butt', count: 20, color: '#E89F74' },
  { name: 'Drool over hooman\'s food', count: 30, color: '#DA5B41' },
  { name: 'Play with hooman', count: 40, color: '#9AA4AF' }
];
const codeBlock = { backgroundColor: 'black', color: 'white', height: '170px', width: '300px', padding: '10px', float: 'left', marginLeft: '20px' };
const chartContainer = { float: 'left', display: 'inline-block' };
const exampleContainer = { padding: '20px', height: '230px', float: 'left' };
const link = { textDecoration: 'none' };

class Demo extends Component {
  render() {
    return <div>
      <h1><a style={link} href="https://twitter.com/dog_feelings">Thoughts of dogs.</a></h1>
      <div style={exampleContainer}>
        <h2>1. Basic Example</h2>
        <div></div>
        <div style={chartContainer}>
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
        <div style={codeBlock}>
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
      <div style={exampleContainer}>
        <h2>2. Without transition</h2>
        <div></div>
        <div style={chartContainer}>
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
        <div style={codeBlock}>
          <pre>
            {`<DonutChart
   innerRadius={90}
   outerRadius={100}
   transition={true}
   svgClass="example2"
   pieClass="pie2"
   displayTooltip={true}
   strokeWidth={3}
   data={data} />`}
          </pre>
        </div>
      </div>
      <div style={exampleContainer}>
        <h2>3. Without stroke width</h2>
        <div></div>
        <div style={chartContainer}>
          <DonutChart
            innerRadius={90}
            outerRadius={100}
            transition={false}
            displayTooltip={true}
            strokeWidth={0}
            svgClass="example3"
            pieClass="pie3"
            data={DONUT_CHART_DATA} />
        </div>
        <div style={codeBlock}>
          <pre>
            {`<DonutChart
   innerRadius={90}
   outerRadius={100}
   transition={true}
   svgClass="example3"
   pieClass="pie3"
   displayTooltip={true}
   strokeWidth={3}
   data={data} />`}
          </pre>
        </div>
      </div>
      <div style={ exampleContainer }>
        <h2>4. A pie chart</h2>
        <div></div>
        <div style={chartContainer}>
          <DonutChart
            innerRadius={0}
            outerRadius={100}
            transition={false}
            displayTooltip={true}
            strokeWidth={3}
            svgClass="example4"
            pieClass="pie4"
            data={DONUT_CHART_DATA} />
        </div>
        <div style={codeBlock}>
          <pre>
            {`<DonutChart
   innerRadius={90}
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
      <div style={ exampleContainer }>
        <h2>5. Without tooltip</h2>
        <div></div>
        <div style={chartContainer}>
          <DonutChart
            innerRadius={0}
            outerRadius={100}
            transition={false}
            displayTooltip={false}
            strokeWidth={3}
            svgClass="example5"
            pieClass="pie5"
            data={DONUT_CHART_DATA} />
        </div>
        <div style={codeBlock}>
          <pre>
            {`<DonutChart
   innerRadius={90}
   outerRadius={100}
   transition={true}
   svgClass="example5"
   pieClass="pie5"
   displayTooltip={false}
   strokeWidth={3}
   data={data} />`}
          </pre>
        </div>
      </div>
    </div>;
  }
}

render(<Demo />, document.querySelector('#demo'));
