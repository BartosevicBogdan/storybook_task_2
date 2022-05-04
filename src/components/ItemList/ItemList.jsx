import React from 'react'
import PropTypes from 'prop-types'
import * as S from './ItemList.style'
import Item from '../Item/Item'

const ItemList = ({items}) => {
  return (
    <S.ItemList>
      {items.map((element) => (<Item key={element.title} image={element.image} title={element.title} salesNumber={element.salesNumber}/> ))}
    </S.ItemList>
  )
}

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ItemList