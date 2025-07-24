import React from "react";
import { Breadcrumb, Button, Container, Form, InputGroup } from "react-bootstrap";
import { useAuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const {login , isAuth} = useAuthContext();
    const navigate = useNavigate();
    //   isAuth && navigate("/")
    // ;
    if (isAuth) {
      navigate("/");
    }
    const loginForm = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        validationSchema:object({
            username:string().required(),
            password:string().required(),
        }),
        validateOnMount:true,
        onSubmit:(values)=>{
           login(values);
            
        },
       
    });
   
   return (
  <>
       <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
       
                <div className="row justify-content-center ">
           <div className="col-md-6">
           <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
             <form onSubmit={loginForm.handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4 w-full max-w-sm">
                  <input
             type="text"
             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            {...loginForm.getFieldProps('username')}

                     placeholder="Enter User Name"
                     isInvalid={loginForm.errors.username}
             required />
              {loginForm.errors.username && loginForm.touched.username}
                   
              
           <input
             type="password"
             className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
             placeholder="Password"
                   {...loginForm.getFieldProps('password')}

  isInvalid={loginForm.errors.password && loginForm.touched.password}        
       required />
                   {loginForm.errors.password}
                    <button
             type="submit"
             className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
           >
             Login
           </button>
         </form>
 </div>
      </div>
      </div>       
      </>
  );
}

