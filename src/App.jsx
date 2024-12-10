
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
TextField

function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [invalidPrinciple,setinvalidPrinciple]=useState(false)
  const [invalidRate,setinvalidRate]=useState(false)
  const [invalidYear,setinvalidYear]=useState(false)


   const validateInput=(inputTag)=>{
    console.log(inputTag,typeof inputTag);
    const{name,value}=inputTag
    console.log(!!name,value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!name,value.match(/^\d+(\.\d+)?$/));

    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidPrinciple(false)
      }else{
        setinvalidPrinciple(true)
      }

    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }
    }else {
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }

    }
    
   }

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle&&rate&&year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completetly" )
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }


  return (
    <>
      <div style={{Width:'100%', minHeight:"100vh"}} className='d-flex justify-content-center align-item-center bg-dark'>
        <div className='bg-light p-5 my-5 rounded'>
          <h3>Simple interest calculator</h3>
          <p>Calculate your simple interest easily!..</p>
          <div className='bg-warning p-5 rounded text-center'>
            <h1> ₹ {interest}</h1>
            <p className='fw-bold'>Total simple interest</p>
          </div>
          <form  className='mt-5'>
            {/* principle amount */}
            <div className='mb-3 '>
            <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle amount" variant="outlined" />
            </div>
            <div>
            {/* INVALID PRINCIPLE */}

            {invalidPrinciple && <div className='text-danger fw-bolder mb-3'>
              *Invalid principle amount
            </div>}
            </div>
            
            {/* rate */}
            <div className='mb-3'>
            <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            <div>
            {/* INVALID RATE */}

            {invalidRate && <div className='text-danger fw-bolder mb-3'>
              *Invalid rate
            </div>}
            </div>
            {/* year */}
            <div className='mb-3'>
            <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time period (yr)" variant="outlined" />
            </div>
            <div>
            {/* INVALID YEAR */}

            {invalidYear && <div className='text-danger fw-bolder mb-3'>
              *Invalid year
            </div>}
            </div>

            {/* button */}
            <Stack direction="row" spacing={2}>
                <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
                <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}}>RESET</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
