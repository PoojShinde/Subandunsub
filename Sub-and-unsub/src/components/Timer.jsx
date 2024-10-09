import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [time, setTime] = useState(0)
    useEffect (()=>{
        const interval = setInterval(()=>{
            setTime(time => time+1)

        }, 1000)

        return () => {
            clearInterval(interval)
        }
    },[])
  return (
    <div>Timer : {time} seconds </div>

  )
}
