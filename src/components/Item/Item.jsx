import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Item.style'


const Item = ({image, title, salesNumber}) => {
  return (
    <S.Item>
          <S.ImageContainer>
            <S.Image src={image} alt=""/>
          </S.ImageContainer>
          <S.Title>
            {title}
          </S.Title>
          <S.Sales>
            {salesNumber} sales
          </S.Sales>
    </S.Item>
  )
}

Item.propTypes = {
    // children: PropTypes.node.isRequired,
}

export default Item