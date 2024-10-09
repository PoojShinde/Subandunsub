import React, { useEffect, useState } from 'react'

export default function DocumentEvent() {
    const [scroll , setScroll] = useState(0)
    useEffect(()=>{
          const handleScroll = ()=>{
            setScroll(window.scrollY)
          }
          window.addEventListener('scroll',handleScroll)

          return ()=>{
            window.removeEventListener('scroll',handleScroll)
          }
    },[])
  return (
    <div style={{ height: '150vh' }}>
         <div>Scroll position : {scroll}</div>
         <div>Scroll down to see the position</div>
    </div>
    
  )
}
