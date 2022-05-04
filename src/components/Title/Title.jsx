import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Title.style'


const Title = ({children}) => {
  return (
    <S.GreenTitle>{children}</S.GreenTitle>
  )
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Title