import React from 'react'
import StatisticList from './StatisticList'

const data =[
  {
    title: "earning",
    metric: "$ 315.20",
  },
  {
    title: "orders",
    metric: "16",
  },
  {
    title: "sessions",
    metric: "463",
  },
  {
    title: "users",
    metric: "17",
  },
]

export default{
  title: "StatisticList",
  component: StatisticList,
}

export const Default= ()=>(
  <StatisticList statistics={data} />
)