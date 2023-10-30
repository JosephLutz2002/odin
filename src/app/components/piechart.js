import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Piechart = ({ data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart Example',
    },
    tooltip: {
      pointFormat: '{point.name}: {point.percentage:.1f}%'
    },
    series: [{
      name: 'Data',
      data: data,
    }],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default Piechart;
