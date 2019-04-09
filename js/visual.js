bing=function(){
    var myChart = echarts.init(document.getElementById('pic1'),'dark');

    var option = {
        title : {
            text: '开车使用手机频率统计',
            subtext: '安全问题',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['一直','有时','从不']
        },
        series : [
            {

                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:10, name:'一直'},
                    {value:62, name:'有时'},
                    {value:28, name:'从不'}
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
}