import React from 'react';
import { number, shape, string } from 'prop-types';

function DonutChartTooltip(props) {
  const { count, name, mousePosition } = props;
  const donutChart = document.getElementsByClassName('pie');
  const container = donutChart.length && donutChart[0].getBoundingClientRect();
  const positionY = mousePosition.y - container.bottom;
  const studentCount = `${name} : ${count}`;

  return (
    <div className="donut-tooltip" style={{ marginLeft: mousePosition.x, marginTop: positionY < -40 ? positionY : -40 }}>
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
