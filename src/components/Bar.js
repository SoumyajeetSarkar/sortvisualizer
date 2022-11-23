import React from 'react'

const Bar = ({height,width,type,index}) => {
  //console.log(index,type);
  var color = 'black'; //default
  if(index==type?.curr && type?.curr!=null){
    color= 'green'  //if current element
  }
  else if(index==type?.swap && type?.swap!=null){  //if element which is to be swapped
    color= 'red'
  }
  else if(index==type?.comp && type?.comp!=null){ //if element is being compared
    color= 'blue'
  }
  else if(type?.sorted?.includes(index)){
    color='yellow'
  }
    const styles = (height,width,color) => ({
        height: height*5,
        width: width,
        background: color,
    })
  return (
    <div className='bar-wrapper'><p>{height}</p><div style={styles(height,width,color)}/></div>
  )
}

export default Bar