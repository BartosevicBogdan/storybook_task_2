import React from 'react'
import ItemList from './ItemList'

export default{
  Title: "ItemList",
  component: ItemList,
}

const data=[
  {
    image:"https://image.shutterstock.com/image-photo/cat-on-white-background-260nw-501609532.jpg",
    title: "test test test",
    salesNumber: 12,
  },
  {
    image:"https://thumbs.dreamstime.com/b/grey-smart-photo-camera-system-icon-isolated-seamless-pattern-black-background-internet-things-concept-wireless-188630967.jpg",
    title: "test test test",
    salesNumber: 12,
  },
  {
    image:"https://c8.alamy.com/zooms/6/2591e8b2c1f844d49bd53fc0839f20e9/2btgwe5.jpg",
    title: "test test test",
    salesNumber: 12,
  },
  {
    image:"https://media.gettyimages.com/vectors/back-to-school-supplies-background-with-seamless-pattern-vector-id482100630?s=612x612",
    title: "test test test",
    salesNumber: 12,
  },
]

export const Default= ()=>(
  <ItemList items={data}/>
)