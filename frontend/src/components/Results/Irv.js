import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class Irv extends Component {
  constructor(props){
    super(props);
    this.state = {
      points: this.props.didRun ? this.props.res[2].map((e) => ({ 
        x: e,
        seriesIndex: 0,
        label: {
          borderColor: '#775DD0',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#775DD0',
          },
          text: 'Elected!',
        }
      })) : [],
      options: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: '#fff',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },
  
            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -10,
                show: true,
                color: '#888',
                fontSize: '17px'
              },
              value: {
                color: '#111',
                fontSize: '36px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ABE5A1'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        series: [75],
        stroke: {
          lineCap: 'round'
        },
        labels: ['Satisfaction Rate'],      
      }
    }
  }

  componentDidMount(){
    console.log(this.state.points);
  }

  render() {
    if(this.props.didRun){
      return (
        <div style={{backgroundColor: "#2b2d3e"}}>
            <h1 style={{color: "aliceblue", fontSize: "2.5rem", fontFamily: "Bungee, cursive", padding: "2rem", background: "black"}}> INSTANT RUNOFF VOTING </h1>
            <div style={{padding:"4rem"}}>
              { this.props.res[0].map((_, index) => 
                (<div key={index}>
                  <h1 style={{color: "white", fontFamily: "Bungee, cursive", padding: "2rem", background: "#797979"}}> ROUND {index + 1} </h1>
                  <div key={index} style={{display: "grid", gridTemplateColumns: "50% 50%"}}>
                    {(index + 1 === this.props.res[0].length) ?
                      <div style={{margin: "auto", backgroundColor: "#2B2D3E"}}>
                        <Chart options={{annotations: {points: this.state.points}, dataLabels: {enabled: true,dropShadow: {enabled: true,left: 2,top: 2,opacity: 0.5}}, colors: ["#46adfb"], xaxis:{categories: this.props.res[0][index][0], labels:{style:{colors: '#ffffff'}}}, yaxis:{title:{text:"Votes", style:{color:'white'}},labels:{style:{color: '#ffffff', fontSize: '14px'}}}, theme:{palette: 'palette8'}, fill: {type: 'gradient',gradient: {shade: 'light',type: "horizontal",shadeIntensity: 0.25,gradientToColors: undefined,inverseColors: true,opacityFrom: 0.85,opacityTo: 0.85,stops: [50, 0, 100]}}}}
                              series={[{name: "series-1", data: this.props.res[0][index][1] }]}
                              type="bar"
                              width="500"
                        />
                      </div> 
                      :
                      <div style={{margin: "auto", backgroundColor: "#2B2D3E"}}>
                      <Chart options={{dataLabels: {enabled: true,dropShadow: {enabled: true,left: 2,top: 2,opacity: 0.5}}, colors: ["#46adfb"], xaxis:{categories: this.props.res[0][index][0], labels:{style:{colors: '#ffffff'}}}, yaxis:{title:{text:"Votes", style:{color:'white'}},labels:{style:{color: '#ffffff', fontSize: '14px'}}}, theme:{palette: 'palette8'}, fill: {type: 'gradient',gradient: {shade: 'light',type: "horizontal",shadeIntensity: 0.25,gradientToColors: undefined,inverseColors: true,opacityFrom: 0.85,opacityTo: 0.85,stops: [50, 0, 100]}}}}
                            series={[{name: "series-1", data: this.props.res[0][index][1] }]}
                            type="bar"
                            width="500"
                      />
                      </div> 
                    }
                    <div style={{margin: "auto", paddingTop: "5rem", backgroundColor: "#2B2D3E"}}>
                      <Chart options={{labels: this.props.res[0][index][0], theme: {palette: 'palette4'}, legend:{fontSize: '14px', labels:{colors: '#ffffff'}}}}
                        series={this.props.res[0][index][1]}
                        type="pie"
                        width="380"
                      />
                    </div>                    
                  </div>
                </div>)) }
                <div>
                  <Chart options={this.state.options} 
                        series={[(((this.props.res[1] + 10)/2)*10).toFixed(2)]} 
                        type="radialBar"
                        height="350"
                  />
                </div>
            </div>
        </div>
      )
    }
    return null;
  }
}
