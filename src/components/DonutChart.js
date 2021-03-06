import '../assets/styles/style.css';

import * as shape from 'd3-shape';
import React, { Component } from 'react';
import { transition } from 'd3-transition';
import { select, event } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { bool, array, number, string } from 'prop-types';

import DonutChartToolTip from './DonutChartTooltip';

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArc: {},
      mousePosition: {}
    };
  }

  componentDidMount() {
    let data = [...this.props.data];
    let svg = select(`.${this.props.pieClass}`)
      .append('svg')
      .attr('width', this.props.outerRadius * 2)
      .attr('height', this.props.outerRadius * 2)
      .attr('class', this.props.svgClass)
      .append('g');

    const translate = {
      x: this.props.outerRadius,
      y: this.props.outerRadius
    };
    let arc = shape
      .arc()
      .outerRadius(this.props.outerRadius)
      .innerRadius(this.props.innerRadius);

    let pie = shape
      .pie()
      .sort(null)
      .value(function (d) {
        return d.count;
      });

    let circle = select('svg').append('g');

    let trans = transition().duration(1000);

    // TODO: Implement an option to display text at the center of the pie chart
    // if (this.props.displayCenterText) {
    //   circle
    //     .append('svg:circle')
    //     .attr('stroke', 'white')
    //     .attr('fill', '#132434')
    //     .attr('r', this.props.innerRadius)
    //     .attr('transform', 'translate(' + translate.x + ',' + translate.y + ')');

    //   circle
    //     .append('text')
    //     .attr('text-anchor', 'middle')
    //     .attr('font-size', this.props.outerRadius / 2)
    //     .attr('y', 0)
    //     .attr('id', 'total-count')
    //     .text(totalCount)
    //     .style('fill', 'white')
    //     .attr('transform', 'translate(' + translate.x + ',' + translate.y + ')');

    //   circle
    //     .append('text')
    //     .attr('text-anchor', 'middle')
    //     .attr('font-size', this.props.outerRadius)
    //     .attr('y', 20)
    //     .text(this.props.centerText)
    //     .style('fill', 'white')
    //     .attr('transform', 'translate(' + translate.x + ',' + translate.y + ')');
    // }

    let g = svg
      .selectAll(this.props.svgClass)
      .data(pie(data))
      .enter()
      .append('g')
      .attr('transform', 'translate(' + translate.x + ',' + translate.y + ')');

    let path = g
      .attr('id', function (d, i) {
        return i;
      })
      .append('path')
      .on('mouseover', d => {
        let mousePosition = {
          x: event.layerX,
          y: event.layerY
        };

        this.handleMouseOver(d.data, mousePosition);
      })
      .on('mouseout', () => {
        this.handleMouseOut();
      })
      .attr('d', arc)
      .attr('stroke', 'white')
      .attr('stroke-width', this.props.strokeWidth);

    if (this.props.transition) {
      path
        .transition(trans)
        .attrTween('d', d => {
          let i = interpolate(d.startAngle, d.endAngle);

          return t => {
            d.endAngle = i(t);

            return arc(d);
          };
        })
        .style('fill', function (d, i) {
          return d.data.color;
        });
    }

    this.setState(
      {
        g,
        pie,
        svg,
        arc,
        path,
        trans,
        circle
      },
      this.update
    );
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.update();
    }
  }

  handleMouseOut = () => {
    this.setState({
      selectedArc: {}
    });
  };

  handleMouseOver = (data, mousePosition) => {
    this.setState({
      mousePosition,
      selectedArc: data
    });
  };

  update = () => {
    let totalCount = 0;
    const { data: donutData } = { ...this.props };

    donutData.forEach(data => totalCount += data.count);
    let data = donutData && donutData.map(donutChartData => {
      let percentage = (donutData.count * 100) / totalCount || 0;

      return { ...donutChartData, percentage };
    });

    this.state.circle.select('#total-count').text(100);
    this.state.g.data(this.state.pie(data));

    if (this.props.transition) {
      this.state.g
        .select('path')
        .interrupt()
        .transition(this.state.trans)
        .attrTween('d', d => {
          let i = interpolate(d.startAngle, d.endAngle);

          return t => {
            d.endAngle = i(t);

            return this.state.arc(d);
          };
        })
        .style('fill', function (d, i) {
          return d.data.color;
        });
    } else {
      this.state.g
        .select('path')
        .style('fill', function (d, i) {
          return d.data.color;
        });
    }

  };

  render() {
    return (
      <div className={this.props.pieClass} style={{ position: 'relative' }} id="arc">
        {(this.props.displayTooltip && Object.keys(this.state.selectedArc).length) ? (
          <DonutChartToolTip
            pieClass={this.props.pieClass}
            tooltipClass={this.props.tooltipClass}
            name={this.state.selectedArc.name || ''}
            count={this.state.selectedArc.count || 0}
            mousePosition={this.state.mousePosition}
          />
        ) : null}
      </div>
    );
  }
}

DonutChart.propTypes = {
  data: array.isRequired,
  outerRadius: number.isRequired,
  innerRadius: number.isRequired,
  strokeWidth: number.isRequired,
  svgClass: string.isRequired,
  pieClass: string.isRequired,
  transition: bool,
  tooltipClass: string,
  displayTooltip: bool
};

export default DonutChart;

