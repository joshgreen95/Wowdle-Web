//core
import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
//modules
import { GetStats } from '../../modules/gamelogic/Stats';

export default function StatGraph() {
  
  const stats = GetStats();
  const statsObj = [
    {
      name: '1',
      num: 0
    },
    {
      name: '2',
      num: 0
    },
    {
      name: '3',
      num: 0
    },
    {
      name: '4',
      num: 0
    },
    {
      name: 'fails',
      num: 0
    }]

  if(stats && stats.isArray){
    stats.forEach((value) => { 
    console.log(statsObj[value - 1]);
    if(value >= 5) {
      statsObj[4]['num'] += 1;
    } else {
      statsObj[value - 1]['num'] += 1;
    }
  });  
} else if(stats){
  statsObj[stats - 1]['num'] += 1;
}
  console.table(statsObj)
  return (
    <>
    <h5>Guess Distribution</h5>
    <BarChart  width={450} height={200} data={statsObj} layout={'vertical'} label='Guess Distribution' margin={{top: 0}}>
      <XAxis dataKey={'num'} type={'number'} axisLine={false} tick={false}/>
      <YAxis dataKey={'name'} minTickGap={0} tickMargin={2} type={'category'} tickLine={false} tick={'font-family: inherit'}/>
      <Bar dataKey={'num'} scale={0.2} fill={'#3a3a3c'} label={'num'} minPointSize={20} >
        <LabelList dataKey={'num'} position={'end'} fill={'white'}/>
      </Bar>
    </BarChart>
    </>
  )
}
