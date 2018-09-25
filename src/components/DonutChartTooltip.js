import React from 'react';
import { number, shape, string } from 'prop-types';

function DonutChartTooltip(props) {
  const { count, name, mousePosition, pieClass } = props;
  const donutChart = document.getElementsByClassName(pieClass);
  const container = donutChart.length && donutChart[0].getBoundingClientRect();
  const positionY = mousePosition.y - container.bottom;
  const positionX = mousePosition.x - container.left;
  const studentCount = `${name} : ${count}`;

  return (
    <div className="donut-tooltip" style={{ marginLeft: positionX, marginTop: positionY < -20 ? positionY : -20 }}>
      {studentCount}
    </div>
  );
}

DonutChartTooltip.propTypes = {
  count: number,
  name: string,
  mousePosition: shape({
    x: number,
    y: number
  })
};

export default DonutChartTooltip;
