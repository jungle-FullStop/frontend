import { Component } from "react";
import Chart from "react-apexcharts";

class Heatmap extends Component {
  constructor(props : any) {
    super(props);

    this.state = {
      options: {plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 45,
                color: '#CFD2D0',
                name: 'TIL 아직 안 씀',
              }
            ]
          }
        }
      }},
      series: [
        {
          name: "",
          data: [
            {
              x: "MON",
              y: 29,
            },
            {
              x: "TUE",
              y: 30,
            },
            {
              x: "WED",
              y: 31,
            },
            {
              x: "THU",
              y: 1,
            },
            {
              x: "FRI",
              y: 2,
            },
            {
              x: "SAT",
              y: 3,
            },
            {
              x: "SUN",
              y: 4,
            },
          ],
        },
        {
          name: "",
          data: [
            {
              x: "MON",
              y: 22,
            },
            {
              x: "TUE",
              y: 23,
            },
            {
              x: "WED",
              y: 24,
            },
            {
              x: "THU",
              y: 25,
            },
            {
              x: "FRI",
              y: 26,
            },
            {
              x: "SAT",
              y: 27,
            },
            {
              x: "SUN",
              y: 28,
            },
          ],
        },
        {
          name: "",
          data: [
            {
              x: "MON",
              y: 15,
            },
            {
              x: "TUE",
              y: 16,
            },
            {
              x: "WED",
              y: 17,
            },
            {
              x: "THU",
              y: 18,
            },
            {
              x: "FRI",
              y: 19,
            },
            {
              x: "SAT",
              y: 20,
            },
            {
              x: "SUN",
              y: 21,
            },
          ],
        },
        {
          name: "",
          data: [
            {
              x: "MON",
              y: 8,
            },
            {
              x: "TUE",
              y: 9,
            },
            {
              x: "WED",
              y: 10,
            },
            {
              x: "THU",
              y: 11,
            },
            {
              x: "FRI",
              y: 12,
            },
            {
              x: "SAT",
              y: 13,
            },
            {
              x: "SUN",
              y: 14,
            },
          ],
        },
        {
          name: "",
          data: [
            {
              x: "MON",
              y: 1,
            },
            {
              x: "TUE",
              y: 2,
            },
            {
              x: "WED",
              y: 3,
            },
            {
              x: "THU",
              y: 4,
            },
            {
              x: "FRI",
              y: 5,
            },
            {
              x: "SAT",
              y: 6,
            },
            {
              x: "SUN",
              y: 7,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
        <div className="heatmap">
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          width="30%"
        />
      </div>
        </div>
    );
  }
}

export default Heatmap;
