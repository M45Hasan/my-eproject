import React from 'react'


const Dropdown = ({children,className,title,dropRef}) => {
  return (
    <div  className={className} ref={dropRef}>
       <p>{title}</p>
        {children}
        </div>
  )
}   

export default Dropdown 