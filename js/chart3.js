var data;
var code = [];
var value = [];


$( document ).ready(function() {
    loadData4();
    loadData();
    makeMap();
    loadData1();
    makeChart();
    makeTable();
});


function loadData4(){
   $.ajax({
            type:"GET",
            url:"data4.json",
            dataType:"text",
            success: parseData4
});
}

function parseData4(data4){
   
var callout = [];
var callout1 = [];

   dataObj= $.parseJSON(data4);
   
   for (var i=0; i < dataObj.length; i++) {
   callout.push(dataObj[i].callout);
   callout1.push(dataObj[i].callout1);
   }
   console.log(callout[0])
   $("#callout").text(callout[0] + "%");
   $("#callout1").text(callout1[0] + "%");
   
   }





function loadData(){
    
    $.ajax({
            type:"GET",
            url:"data3.json",
            dataType:"text",
            success: parseData
});
  
}

function parseData(data){
   
   dataObj= $.parseJSON(data);
   
   for (var i=0; i < dataObj.length; i++) {
   value.push(dataObj[i].value);
   code.push(dataObj[i].code);
    }
    

    makeMap()
}


function makeMap() {

    $.getJSON('data3.json', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

        // Instanciate the map
        $('#container').highcharts('Map', {

            chart : {
               borderWidth: 1
            },

            title : {
                text : ' '
                
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'linear',
                minColor: '#EDF1E9',
                maxColor: '#56795A',
                stops: [
                    [0, '#EDF1E9'],
                    [.67, '#75A57B'],
                    [1, '#56795A']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.code}'
                },
                name: 'Percentage farmland',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}%'
                }
            }]
        });
    });
};

var data1;
var abb = [];
var state = [];
var pctempag = [];
var unemprate = [];
var pctlandfarms = [];


function loadData1(){
    
    $.ajax({
            type:"GET",
            url:"data2.json",
            dataType:"text",
            success: parseData1
});
    
   
}

function parseData1(data1){
    //console.log(data);
    
    dataObj = $.parseJSON(data1);
    
    for (var i=0; i < dataObj.length; i++){
        abb.push(dataObj[i].abb);
        pctempag.push(parseFloat(dataObj[i].pctempag));
        unemprate.push(parseFloat(dataObj[i].unemprate));
 }
    console.log(pctempag);
    console.log(unemprate);
   
   makeChart();
   
}


function makeChart() {
    $('#container1').highcharts({
        chart: {
            type: 'bar',
            marginTop: 80
        },
        title: {
            text:  ' '
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: abb
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high',
            },
            labels: {
                overflow: 'justify',
            }
        },
         tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: { 
                enabled:false
            }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 50,
            y: 0,
            floating: true,
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false,
            itemMarginTop : 10,
            itemStyle: {
               font: '11pt Oswald, sans-serif'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Pctempag**',
            color: '#56795A',
            pointPadding: 0,
            data: pctempag

        }, {
            name: 'Unemployment Rate',
            color: '#B8D2B4',
            pointPadding: 0,
            data: unemprate

        }]
    });
    
   
};


function makeTable(){
   $('#example').dataTable( {
        "ajax": "data.json",
        responsive:true
    } );
   
}


