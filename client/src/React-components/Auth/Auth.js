/*import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Avatar, Button, Container,Grid,Paper,/*TextField,Typography } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import Icon from "./Icon.js";
import LockOutlinedIcon  from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./input";
import { signup, signin } from "../../actions/auth.js";
//import AUTH from '../../constants/actionTypes';

const intialState = {firstName:'',lastName:'',email:'', password:'', confirmPassword:''};

const Auth = () => {
    const classes = useStyles();
    const[showPassword, setShowPassword] = useState(false);
    const[isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] =useState(intialState)
    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit= (e)=>{
        console.log(formData);
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    };
    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleShowPassword = ()=> setShowPassword((prevShowPassword)=> !prevShowPassword);
    const switchMode = ()=> {
        setIsSignUp((prevIsSignup)=>!prevIsSignup);
        handleShowPassword(false);
    }
    const googleSuccess = async (res)=>{
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({type: 'AUTH'  , data:{result, token}});
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    };
    const googleFailure = (error)=>{
        console.log('Google Sign in Failed. Try again later')
        console.log(error);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5"> {isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                     <Grid container spacing={2}>
                        {isSignup && (
                            <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/> 
                            <Input name="lastName" label="Last Name" handleChange={handleChange}  half/> 
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type= {showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label=" Confirm Password" handleChange={handleChange} type=  "password" /> }
                     </Grid>
                     
                     <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                         {isSignup ? "Sign Up" : "Sign In"}
                     </Button>
                     <GoogleLogin 
                        clientId="560348841452-7iqlvfqvo0tgr1qdscpmss8hvdogh443.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button 
                            className={classes.googleButton}
                             color="primary"
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon/>} variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                     />
                     <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In' : 'Click here to Create an Account '}
                                </Button>
                            </Grid>
                     </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth; */

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Avatar, Button, Paper, Container,Grid,Typography, TextField } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";

import Icon from "./Icon.js";
import LockOutlinedIcon  from "@material-ui/icons/LockOutlined";
import useStyles from './styles'
import Input from "./input";
import { signin, signup } from "../../actions/auth";

const intialState = {firstName : '', lastName: '', email: '', password: '', confirmPassword:''}

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [ formData, setFormData] = useState(intialState) ;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword);

    const switchMode = () => {
        setIsSignUp((prevIsSignup)=> !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async(res)=>{
        console.log(res) 
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type:'AUTH', data:{result, token}});
            history.push('/');
            
        } catch (error) {
            console.log(error)
        }

    };

    const googleFailure = (error)=>{
        console.log("Google Sign in Failed, Try again later")
        console.log(error)
    };


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignup){
            dispatch(signup(formData,history));
        }
        else{
            dispatch(signin(formData,history));
        }

        console.log(formData);
    };

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:[e.target.value]})
    };

   return (
       <Container component="main" maxWidth="xs">
           <Paper className={classes.paper} elevation={3}>
               <Avatar className={classes.Avatar}>
                   <LockOutlinedIcon/>
               </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid container spacing ={2}>
                        {isSignup && (
                            <>
                            <Input name="firstName" label= "First Name" handleChange={handleChange} autoFocus half/>
                            <Input name="lastName" label= "Last Name" handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password" } handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />

                        }
                    </Grid>
                    <Button type ="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign in'}
                    </Button>
                    <GoogleLogin 
                        clientId="560348841452-7iqlvfqvo0tgr1qdscpmss8hvdogh443.apps.googleusercontent.com"
                        render={(renderProps) =>(
                            <Button 
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon/>}
                                variant="contained">
                                    Google Sign In 
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an Account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
           </Paper>

       </Container>
   );
};

export default Auth;