import React, { useState } from "react";

function Form(props) {
 const [formData, setFormData]=useState({
    firstName:"Sylvia",
    lastName:"Woods"
 });
 const [submission, setSubmission]=useState([])
 const [errors, setErrors]=useState([])



 function handleSubmit(e){
  e.preventDefault()
  if(formData.firstName.length >0){
    const clone=[...submission, formData]
    setSubmission(clone)
  }else{
    setErrors(`${formData.firstName} is required`)
  }
  console.log(setErrors)
 }
 const toBeSubmitted=submission.map((data, index)=>{
  return(
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  )
 })

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={formData.firstName} onChange={(e)=>setFormData({...formData, firstName:e.target.value})}/>
      <input type="text" value={formData.lastName} onChange={(e)=>setFormData({...formData, lastName:e.target.value})}/>
      <button type="submit">Submit</button>
    </form>  
    {
        errors.map((error,index)=>(
          <p key={index} style={{color:"red"}}>{error}</p>
        ))}
      <h3>Submissions</h3>
      {toBeSubmitted}
    </div>
    
  );
}

export default Form;
