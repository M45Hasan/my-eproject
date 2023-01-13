import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import Container from './Container'

const Add2 = () => {
  return (
    <div className='mt-[16px] xl:mt-32 lg:mt-6'>
        <Container>
        <Link to="#">
            <Image imgsrc="assets/add2.png"/>
        </Link>
        </Container>    
        </div>
  )
}

export default Add2

