import React from 'react'


const Practice = () => {
    
    let myLoop = ['rinku', 'renu', 'swayam', 'bravo'];

    // Old way
    // for(let i=0; i <= myLoop.length; i++){
    //     console.log(myLoop[i])
    // }

    // ES6 way
    // for (let elements of myLoop){
    //     console.log(elements)
    // }

    // forEach way
    myLoop.forEach(function(renu, index, array){
        console.log(renu)
    });
    
  return (
    <>
    {/* <div>{`${[...myLoop]}`}</div> */}


    </>

    
  )
}

export default Practice