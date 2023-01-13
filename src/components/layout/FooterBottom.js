import React from 'react'

import Flex from './Flex'
import { Link } from 'react-router-dom'
import {TfiFacebook ,TfiLinkedin} from "react-icons/tfi"
import {RiInstagramFill} from  "react-icons/ri" 

const FooterBottom = () => {
  return (
    <div className="xl:mx-16 mx-[10px] lg:mx-[13px] md:mx-[17px] lg:mt-[65px] mt-[34px] flex justify-between">
          <div className="w-[92px]">
            <Flex className="flex justify-between">
              <Link to="#">
                <TfiFacebook />
              </Link>

              <Link to="#">
                <TfiLinkedin />
              </Link>

              <Link to="#">
                <RiInstagramFill />
              </Link>
            </Flex>
          </div>
          <p className="rext-[#6D6D6D] font-dm text-[14px] font-normal">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </div>
  )
}

export default FooterBottom