import React from 'react'
import { Data } from './Data'
const About = () => {
  return (
    <div>
        {
            Data.map((item)=>{
                <li>
                    {item.title}
                </li>
            }
        )}
    </div>
  )
}

export default About