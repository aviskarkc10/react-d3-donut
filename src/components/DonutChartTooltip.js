import React from 'react';
import { number, shape, string } from 'prop-types';

function DonutChartTooltip(props) {
  const { count, name, mousePosition, pieClass, tooltipClass } = props;
  const donutChart = document.getElementsByClassName(pieClass);
  const container = donutChart.length && donutChart[0].getBoundingClientRect();
  const positionY = mousePosition.y - container.height;
  const positionX = mousePosition.x;
  const studentCount = `${name}: ${count}`;
  const donutStyle = tooltipClass || 'donut-tooltip'; 

  return (
    <div className={donutStyle} style={{ marginLeft: positionX, marginTop: positionY }}>
      {studentCount}
    </div>
  );
}

DonutChartTooltip.propTypes = {
  count: number,
  name: string,
  tooltipClass: string,
  mousePosition: shape({
    x: number,
    y: number
  }),
  pieClass: string
};

export default DonutChartTooltip;
