import React from 'react'
import styles from './ExampleCarouselImage.module.css'

const ExampleCarouselImage = (props) => {
    console.log(props.src)
  return (
        <img src ={props.src} />
    )
}

export default ExampleCarouselImage