import React from 'react'
import PropTypes from 'prop-types'
import * as S from './StatisticList.style'
import Statistic from './../Statistic/Statistic';

const StatisticList = ({statistics}) => {
  return (
    <S.StatisticList>
      {statistics.map((element)=>(<S.EqualWidth><Statistic title={element.title} metric={element.metric}/></S.EqualWidth>))}
    </S.StatisticList>
  )
}

StatisticList.propTypes = {
    statistics: PropTypes.array.isRequired,
}

export default StatisticList