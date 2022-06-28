var data = {
    tags : ['temp','hum','pres'],
    data : [
        {label:10,temp:30,hum:0,pres:997},
        {label:11,temp:38,hum:5,pres:997},
        {label:12,temp:32,hum:10,pres:997},
        {label:13,temp:26,hum:15,pres:997},
        {label:14,temp:23,hum:00,pres:997},
        {label:15,temp:31,hum:00,pres:997},
        {label:16,temp:30,hum:00,pres:997},
        {label:17,temp:30,hum:00,pres:997},
    ],
}

var createChart = (id,values) => {
    for (let labels,i = 0; i < values.data.lenght; i++) {
        labels.push(values.data[i].label);
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: '温度(℃)',
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                yAxisID: 'temp_hum',
                data: [30, 38, 32, 26, 23, 31, 30],
            },
            {
                label: '湿度(%)',
                backgroundColor: '#006494',
                borderColor: '#006494',
                yAxisID: 'temp_hum',
                data: [0, 5, 10, 15, 20, 25, 30],
            },
            {
                label: '気圧(hPa)',
                backgroundColor: '#FA6400',
                borderColor: '#FA6400',
                yAxisID: 'pres',
                data: [997, 997, 1000, 998, 999, 1007, 997],
            },
        ]
    };
    const config = {
        responsive: false,
        type: 'line',
        data: data,
        options: {
            scales: {
                temp_hum: {
                    display: false,
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 100,
                },
                pres: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 1050,
                    max: 950,
                },
            }
        }
    };
    const myChart = new Chart(id,config);
}