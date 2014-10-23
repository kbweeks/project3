
var fruit = ['Apples', 'Oranges', 'Pears'];
var people = ['Steven', 'Kate', 'Melanie'];
var data = [[1,5,10], [3,7,9], [6,8,1]];


 
 
 //build charts
 $(document).ready(function(){
    console.log("document ready");
    makeChart();
 });
 
function makeChart() {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: fruit
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        legend: {
            reversed: false,
            title:{
                text:"People"
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: people[0],
            data: data[0]
        }, {
            name: people[1],
            data: data[1]
        }, {
            name: people[2],
            data: data[2]
        }]
    });
};