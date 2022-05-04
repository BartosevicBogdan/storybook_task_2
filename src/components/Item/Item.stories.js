import React from 'react'
import Item from './Item'

export default{
  Title: "Item",
  component: Item,
}

const data={
  image:"https://image.shutterstock.com/image-photo/cat-on-white-background-260nw-501609532.jpg",
  title: "test test test",
  salesNumber: 12,
}

export const Default= ()=>(
  <Item image={"https://thumbs.dreamstime.com/b/grey-smart-photo-camera-system-icon-isolated-seamless-pattern-black-background-internet-things-concept-wireless-188630967.jpg"} title={data.title} salesNumber={data.salesNumber} />
)