import './styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

import DonutChart from '../../src';

const DONUT_CHART_DATA = [
  { name: 'Catch tail', count: 10, color: '#00A99D' },
  { name: 'Smell own butt', count: 20, color: '#E89F74' },
  { name: 'Drool over hooman\'s food', count: 30, color: '#DA5B41' },
  { name: 'Play with hooman', count: 40, color: '#9AA4AF' }
];

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>REACT-D3-DONUT</h1>
        <div>
          <h2>Import the component</h2>
          <div className="code-block">{`import DonutChart from 'react-d3-donut';`}</div>
        </div>
        <div>
          <h2>Props used to display chart.</h2>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Type</td>
                <td>Required</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data</td>
                <td>The data to be displayed on the chart.</td>
                <td>array</td>
                <td>true</td>
              </tr>
              <tr>
                <td>outerRadius</td>
                <td>The radius of the bigger circle.</td>
                <td>number</td>
                <td>true</td>
              </tr>
              <tr>
                <td>innerRadius</td>
                <td>The radius of the smaller circle.</td>
                <td>number</td>
                <td>true</td>
              </tr>
              <tr>
                <td>strokeWidth</td>
                <td>Set the gap between each pie.</td>
                <td>number</td>
                <td>true</td>
              </tr>
              <tr>
                <td>svgClass</td>
                <td>Set the class name of the svg to be appended to the DOM.</td>
                <td>string</td>
                <td>true</td>
              </tr>
              <tr>
                <td>pieClass</td>
                <td>Set the class name of the pie chart to be appended to the DOM.</td>
                <td>string</td>
                <td>true</td>
              </tr>
              <tr>
                <td>transition</td>
                <td>Set whether or not you want the animation on your chart.</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>displayTooltip</td>
                <td>Set whether or not you want tooltip on your chart.</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h3>Note: data should have the following shape</h3>
            <div className="code-block">
              <pre>
                {`data = [{
  count: 20       // Value of the property. Required.
  color: #000000  // Color code for the pie's color. Required.
  name: 'My name' // Optional value. Used to display in the tooltip.
 }]`}
              </pre>
            </div>
          </div>
        </div>
        <div className="example-container">
          <h2>1. Basic Example</h2>
          <div></div>
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
        <div className="example-container">
          <h2>2. Without transition</h2>
          <div></div>
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
        <div className="example-container">
          <h2>4. A pie chart</h2>
          <div></div>
          <div className="chart-container">
            <DonutChart
              innerRadius={0}
              outerRadius={100}
              transition={true}
              displayTooltip={true}
              strokeWidth={3}
              svgClass="example4"
              pieClass="pie4"
              data={DONUT_CHART_DATA} />
          </div>
          <div className="code-block example-block">
            <pre>
              {`<DonutChart
   innerRadius={0}
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
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
