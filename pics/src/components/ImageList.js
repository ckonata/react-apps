import React from "react";

const ImageList = (props)=>{

   const images = props.images.map(x => {
    return <img src={x.urls.small} key={x.id} alt={x.description}/>
  })

  return <div>{images}</div>
}

export default ImageList;