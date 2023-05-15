import { Link, useNavigate } from "react-router-dom";
import React,{useState} from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';

import styles from "./styles.module.css";
import { RegisterService } from "../Services/AuthServices";

function Signup() {
	
	const [registerValues,setRegisterValues] = useState({
		userName:"",
		Email:"",
		Password:""
	   })
  const navigate = useNavigate()
  const toast = useToast()
  
  
  const HandleChange =(e)=>{
  const {name,value}= e.target
  setRegisterValues({...registerValues,[name]:value})
  }
  
  const HandleSubmit =async()=>{
   
   try{
	const response = await RegisterService(registerValues);
	if(response.user){
	  toast({
		title: "User Registerd successfully",
		status: "success",
		position: "top",
		duration: 2000,
		isClosable: true,
	  });
	  navigate("/login")
	}
   }catch(error){
	toast({
	  title: "Something Went Wrong",
	  status: "error",
	  position: "top",
	  duration: 2000,
	  isClosable: true,
	});
   }
  }
  
 
  
	const googleAuth = () => {
		window.open(
			`http://localhost:2000/auth/google/callback`,
			"_self"
		);
	};


	return (
		<div className={styles.container}>
			
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="https://assets.justinmind.com/wp-content/uploads/2018/10/inspiration-login-forms-list-768x492.png" alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input  name="userName" value={registerValues.userName} onChange={HandleChange} type="text"
					 className={styles.input} placeholder="Username" />

					<input name="Email" 
                value={registerValues.Email}
                 onChange={HandleChange}  type="email"  className={styles.input} 
					placeholder="Email" />
					<input
					 name="Password" value={registerValues.Password}
					  onChange={HandleChange} 
					
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}   onClick={HandleSubmit}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sing up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;