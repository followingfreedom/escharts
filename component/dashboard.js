import React from 'react';
import Chart from 'chart.js';
import axios from 'axios';



function LineChart(){
	let ctx = document.getElementById("lineChart").getContext('2d');
	let data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
		{
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    	]
	};
	let myChart = new Chart(ctx, {
    	type: 'line',
    	data:data,
    	options: {
        	responsive: false
    	}
    });





}

class Dashboard extends React.Component{

	componentDidMount(){
		console.log("end");
		let ctx = document.getElementById("lineChart");
	let data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
		{
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    	]
	};
	let myChart = new Chart(ctx, {
    	type: 'line',
    	data:data,
    	options: {
        	responsive: false
    	}
    });

    let ctxBar = document.getElementById("barChart").getContext('2d');
	let barData = {
    	labels: ["January", "February", "March", "April", "May", "June", "July"],
    	datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    	]
		};
	let options = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
    let myBarChart = new Chart(ctxBar, {
    	type: 'bar',
    	data: barData,
    	options: options
	});

	}

	render(){
		console.log("begin");
		axios.get('http://localhost:8090/index').then(function(response){
			console.log(response.data);
		});
		return (
			<div>
				<canvas id="lineChart" width="400" height="400"></canvas>
				<canvas id="barChart" width="100" height="50"></canvas>
				Dashboard
			</div>
		);
	}
}

export default Dashboard;
