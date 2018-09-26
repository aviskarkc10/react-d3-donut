import React from 'react';

function DataShape() {
  return (
    <div>
      <h3>Note: data should have the following shape:</h3>
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
  );
}

export default DataShape;
