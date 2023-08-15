import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import axios from 'axios';

import { useState } from 'react';

  const initialValues ={
    username : '',
    password : '',

  }

const inputError ={
  isUrnError:false,
  errorUrnMsg:'',
  isPswError:false,
  errorPswMsg:'',
}

const Login = (props) => {
  const[iValues,setValues]= useState(initialValues)
  const[visibility, setVisibility] = useState(true)
  const[errors, setErrors] = useState(inputError)

  const ValidateUsername =(val)=>{
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if(!regex.test(val)){
        setErrors({...errors, 
          isUrnError:true,
          errorUrnMsg:'Invalid Username' })
    }else{
      setErrors({...errors, 
        isUrnError:false,
        errorUrnMsg:'' })
    }
  }
  

  const loginFunction=(e)=>{
    e.preventDefault()
    const url= "http://localhost/mymachAPI/index.php/servicecenterCN/loginServicecenter"
    const data= JSON.stringify({email:iValues.username, password:iValues.password})
    axios.post(url,data).then(response=>{
      console.log(response.data)
      if(response.data.hasOwnProperty('message')&& response.data.message == 'Login successful'){

        localStorage.setItem('servieCenterId', response.data.data.serviceCenterId);
        
        console.log(localStorage.getItem('servieCenterId'))
        window.location.href ="http://localhost:3000"+props.link 
      }
      else{
        setErrors({...errors,isPswError:true,errorPswMsg:response.data.message})
      }
  }).catch(error=>{
     
  })
  
}

  const ValidatePw =(val)=>{
    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#$%^&+=]{8}$/)
    if(!regex.test(val)){
      setErrors({...errors, 
        isPswError:true,
        errorPswMsg:'Invalid Password' })
    }else{
      setErrors({...errors, 
        isPswError:false,
        errorPswMsg:'' })
    }
  }

  const handleInputChange = e=>{
    const value = e.target.value
    const name = e.target.name
    setValues({
      ...iValues,
      [name]:value
    })
    name=="username"? ValidateUsername(value):name=="password"? ValidatePw(value):console.log("called");
 
  }
  
    return(
        <>
          <Card className='margin-bottom'>
              <CardHeader title="Service Center Login"align="center"/>
              <CardContent>
                  <form onSubmit={loginFunction}>
                      <FormControl fullWidth error={errors.isUrnError} margin='dense'>
                        <TextField fullWidth id="username" error={errors.isUrnError}  label="Username" name='username' variant="outlined" value={iValues.username} onInput={handleInputChange}/>
                        {
                          errors.isUrnError ? <FormHelperText>{errors.errorUrnMsg}</FormHelperText> : ''
                        }
                      </FormControl>
                      
                      <FormControl fullWidth margin='dense' error={errors.isPswError}>
                        <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={visibility?  'password':'text'}
                          name='password'
                          
                          value={iValues.password}
                          onInput={handleInputChange}                      
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={()=>{setVisibility(prev=>(!prev))}}
                                edge="end"
                              >
                              {visibility?  <Visibility />:<VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          
                        />
                        {
                          errors.isPswError ? <FormHelperText>{errors.errorPswMsg}</FormHelperText> : ''
                        }
                        
                      </FormControl>
                      <FormControl  fullWidth >
                        <a href='../sign/reg'>Create Account?</a>
                      </FormControl>
                      <FormControl margin='dense' fullWidth >
                        <div style={{"width":"100%","textAlign":"center"}}>
                          <Button type='submit' style={{"minWidth":"150px"}} variant="contained" size='Large'  >
                            Login
                          </Button>
                        </div>
                        
                      </FormControl>
                  </form>
              </CardContent>
          </Card>
        </>
    )
}

export default Login