import React from 'react'
import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
  return (
<div className="watch">
    <div className="back">
        <ArrowBackOutlinedIcon/>
        Home
    </div>
    <div className="video"
     autoplay 
     progress 
     controls 
     src='https://www.youtube.com/watch?v=O-b2VfmmbyA&t=1s'>

    </div>
</div>  
)
}

export default Watch