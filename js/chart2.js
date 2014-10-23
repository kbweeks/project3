
var years = ['1990', '2000', '2001', '2020'];
var data = [[400, 130, 80, 60], [400, 130, 80, 60], [400, 130, 80, 60], [400, 130, 80, 60]];
var categories = ['Jan', 'Feb', 'March', 'April'];


 $(document).ready(function(){
    console.log("document ready");
    makeChart();
 });

function makeChart() {
    $('#container').highcharts({
        title: {
            text: 'Data',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Temperature (¡C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '¡C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: years[0],
            data: data[0]
        }, {
            name: years[1],
            data: data[1]
        }, {
            name: years[2],
            data: data[2]
        }, {
            name: years[3],
            data: data[3]
        }]
    });
};