import React, { Fragment } from 'react';

function PropsTable() {
  return (
    <Fragment>
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
          <tr>
            <td>tooltipClass</td>
            <td>Use a custom style for your tooltip</td>
            <td>string</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default PropsTable;
