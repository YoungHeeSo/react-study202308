
import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {

  //지출 액들만 월별로 추출
  const dataPointValues=dataPoints.map(dp=>dp.value);
  // console.log(dataPointValues);

  //1년치 총액
  //a: 리턴 결과에 대한 누적값, b: 배열에서 하나씩 꺼낸값
  const maximumValue=dataPointValues.reduce((accum, cur)=>{
    // console.log(`a: ${accum}, b: `, cur);
    return accum+cur;
  }, 0);
  console.log(maximumValue);

  //그 중 제일 지출이 높은 값으로 구하기, 기준으로 %게이지 채울 것
  // const maximumValue = Math.max(...dataPointValues);
  // console.log('지출이 높은 값: ',maximumValue);

  return (
    <div className="chart">

        {dataPoints.map(({label, value}) => (
            <ChartBar key={label} label={label} currentValue={value} maxValue={maximumValue} />
        ))} 
            
    </div>
  );
};

export default Chart;
