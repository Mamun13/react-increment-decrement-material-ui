import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./increment.css"

const Incre = () => {
    const [sum, setSum] = useState("0");
    const incNum = () =>{
        setSum(sum + 1); 
    };
    const decNum = () =>{
        if(sum > 0){
            setSum(sum - 1);
        }else{
            alert("sorry, Zero limit reached.")
            setSum(0);
        }
    }

    return(
      <>  
      <section id='increment'>
      <div className="container">
        <div className="row p-0">
          <div className="col-lg-4 p-0"></div>
          <div className="col-lg-4 p-0 increment text-center">
            <h1>Incre & Decre</h1>
            <h2>{sum}</h2>
            <Button variant="contained" onClick={incNum} className='button-one' color="success">
                Increment
            </Button>
            <Button variant="outlined" onClick={decNum} className='button-two' color="error">
                Decrement
            </Button>
          </div>
          <div className="col-lg-4 col-md-4 p-0"></div>
        </div>
      </div>
    </section>
  </>
    )
}
export default Incre;