import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Product from './Product'


const BestSeller = () => {
  return (
    <>
       <div className="mt-[16px] xl:mt-32 lg:mt-6 ">
        <Container className="relative">
          <Heading title="Our Bestsellers" />

          <Flex className="flex justify-between flex-wrap  gap-y-6 lg:gap-y-0">
            <div className=" sm:max-w-[290px]  xl:max-w-[370px]   max-w-[150px]">
              <Product
                src="assets/best1.png"
                badge={true}
                title="Available"
                Pname="Basic Crew Neck Tee"
                Price="$44.00"
                Color="blcak"
                className="text-[black]"
              />
            </div>
            <div className=" sm:max-w-[290px]  xl:max-w-[370px]  max-w-[150px]">
              <Product
                src="assets/best2.png"
                badge={true}
                title="Available"
                Pname="Basic Crew Neck Tee"
                Price="$45.00"
                Color="white"
                className="text-[white]"
              />
            </div>
            <div className=" sm:max-w-[290px]  xl:max-w-[370px]  max-w-[150px]">
              <Product
                src="assets/best3.png"
                badge={true}
                title="Available"
                Pname="Basic Crew Neck Tee"
                Price="$46.00"
                Color="red"
                className="text-[red]"
              />
            </div>
            <div className=" sm:max-w-[290px]  xl:max-w-[370px]  max-w-[150px]">
              <Product
                src="assets/best4.png"
                badge={true}
                title="Available"
                Pname="Basic Crew Neck Tee"
                Price="$47.00"
                Color="green"
                className="text-[green]"
              />
            </div>
          </Flex>
        </Container>
      </div>
    
    </>
  )
}

export default BestSeller