bing=function(){
    var myChart = echarts.init(document.getElementById('pic4'),'dark');

    var option = {
        title : {
            text: '对开车时使用手机的看法',
            subtext: '危险认知',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['非常危险','危险','有点危险','稍微危险','根本不危险']
        },
        series : [
            {

                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:26, name:'非常危险'},
                    {value:24, name:'危险'},
                    {value:33, name:'有点危险'},
                    {value:16, name:'稍微危险'},
                    {value:2, name:'根本不危险'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    return myChart;
    // window.onresize = function() {
    //     myChart2.resize();
    // }
}

double_bing=function(){
    var myChart = echarts.init(document.getElementById('pic1'),'dark');

    // app.title = '嵌套环形图';

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['经常打电话','偶尔打电话','从不打电话','经常发短信','偶尔发短信','从不发短信']
        },
        series: [
            {
                name:'占比',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '30%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:10, name:'经常打电话', selected:true},
                    {value:62, name:'偶尔打电话'},
                    {value:28, name:'从不打电话'}
                ]
            },
            {
                name:'占比',
                type:'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:5, name:'经常发短信'},
                    {value:22, name:'偶尔发短信'},
                    {value:74, name:'从不发短信'}
                ]
            }
        ]
    };

    myChart.setOption(option);
    return myChart;
}

data=function(){
    var myChart = echarts.init(document.getElementById('pic3'),'dark');

    var option = {
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ['year', '开车时使用手机比例'],
                            ['18-32', 83],
                            ['33-44', 85],
                            ['45-63', 70],
                            ['64-', 42]
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {type: 'bar'}
                    ]
                };

    myChart.setOption(option);
    return myChart;
}