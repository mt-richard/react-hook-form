'use client'

import { Formtype } from "@/types/form";
import React from "react";
import { useForm } from "react-hook-form";


function MyForm() {
   
  const { register, handleSubmit,formState: { errors }, } = useForm<Formtype>();

  const onSubmit = (data: Formtype) :void  => {
    console.log(data);
  };

 

  return (
    <div className="all">
        <div className="container">
            <h1>REACT HOOK FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input {...register("firstName",{required: 'FirstName is required'})} defaultValue={""} className="input"/>
                    {errors.firstName ?  <span className="errorinput">{errors.firstName.message}</span> : <span className="normal">Ex: Richard</span> }
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input {...register("lastName", {required: 'LastName is required'})} defaultValue={""} className="input"/>
                    {errors.lastName ?  <span className="errorinput">{errors.lastName.message}</span> : <span className="normal">Ex: Mbanza</span> }
                </div>
                <div className="mb-3">
                    <label>Phone: </label>
                    <input {...register("phone", {required: 'Phone is require', maxLength: {value : 10 , message: 'Phone number should not exceed 10 digits'}})} defaultValue={""} className="input"/>
                    {errors.phone ?  <span className="errorinput">{errors.phone.message}</span> : <span className="normal">Ex: 0787654212</span>}
                </div>
                <div className="py-5">
                    <button type="submit" className="subbtn">Submit</button>
                </div>
            </form>
        </div>
    </div>
    
  );
}

export default MyForm;
