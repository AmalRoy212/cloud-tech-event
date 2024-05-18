import React from 'react';
import './line.css'

function LineProgress({number}) {
  return (
    <div class="progress">
      <div class="bar" style={{width:`${number}%`}}>
        <p class="percent">{number}%</p>
      </div>
    </div>
  )
}

export default LineProgress
