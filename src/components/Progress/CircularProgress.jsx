import React from 'react';
import "./circular.css"

function CircularProgress() {
  return (
    <div class="progress">
      <span class="title timer" data-from="0" data-to="85" data-speed="1800"></span>
      <div class="overlay"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
  )
}

export default CircularProgress
