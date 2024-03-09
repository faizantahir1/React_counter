import React, { useState } from 'react'

const Counter = () => {
   const [count,setCount] = useState(0)
 
 
    return (
    <>

    <div className="container text-center py-5">
        <h1>Counter</h1>
        <h1 className='display-1'>{count}</h1>
         <div className="d-flex gap3 justify-content-center gap-1">
              <button onClick={()=> setCount(count - 1)} className="btn btn-danger align-item-center">Decrease</button>
              <button onClick={()=> setCount(0)} className="btn btn-outline-warning">Reset</button>
              <button onClick={()=>setCount(count+1)}   className="button btn btn-success">Increse</button>

         </div>
    </div>
    </>
  )
}

export default Counter