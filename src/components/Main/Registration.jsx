import FormControl    from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment';

import TextField      from '@mui/material/TextField';
import InputLabel     from '@mui/material/InputLabel';
import OutlinedInput  from '@mui/material/OutlinedInput';
import Card         from '@mui/material/Card';

import CardHeader   from '@mui/material/CardHeader';
import CardContent  from '@mui/material/CardContent';
import Button     from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Visibility     from '@mui/icons-material/Visibility';
import VisibilityOff  from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useState } from 'react'

const initialValues ={
    name:'',
    address:'',
    contactNo:'',
    email:'',
    longitude:'',
    latitude:'',
    brNo:'',
    createPassword:'',
    confirmPassword:''
}

const initialErrors ={
  isNameError:false,
  errorName:'',
  isAddressError:false,
  errorAddress:'',
  isContactNoError:false,
  errorContactNo:'',
  isEmailError:false,
  errorEmail:'',
  isLongitudeError:false,
  errorLongitude:'',
  isLatitudeError:false,
  errorLatitude:'',
  isBRNoError:false,
  errorBRNo:'',
  isCreatePwError:false,
  errorCreatePw:'',
  isConfirmPwError:false,
  errorConfirmPw:'',
}

const Registration = (props) => {

    const[visibility, setVisibility] = useState(false)
    const[values, setValues] = useState(initialValues)
    const[errors,setErrors] = useState(initialErrors)

    const ValidateName= ()=>{
      const regex = new RegExp(/^[a-zA-Z\s]{2,20}$/)
        
        if(!regex.test(values.name)){
          setErrors({...errors, 
            isNameError:true,
            errorName:'Invalid Service Center Name' })
        }else{
          setErrors({...errors, 
            isNameError:false,
            errorName:'' })
        }
    }
    const ValidateAddress=()=>{
        const regex = new RegExp(/^[a-zA-Z0-9\s,'-]{5,100}$/)
    
        if(!regex.test(values.address)){
          setErrors({...errors,
            isAddressError:true,
            errorAddress:'Please fill this form'})

        }else{
            setErrors({...errors, 
              isAddressError:false,
              errorAddress:''})
        }
    }

    const ValidateContactNo=()=>{
          const regex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        
          if(!regex.test(values.contactNo)){
            setErrors({...errors, 
              isContactNoError:true,
              errorContactNo:'Please Enter Valid Contact No' })
        }else{
            setErrors({...errors, 
              isContactNoError:false,
              errorContactNo:'' })
        }
    }

      const ValidateEmail=()=>{
          const regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    
          if(!regex.test(values.email)){
            setErrors({...errors, 
              isEmailError:true,
              errorEmail:'Please Enter Valid E-Mail' })
        }else{
            setErrors({...errors, 
              isEmailError:false,
              errorEmail:'' })
        }
      }

        const ValidateBRNo=()=>{
          const regex = new RegExp(/^[A-Z]{2}[0-9]{6}$/)
    
          if(!regex.test(values.brNo)){
            setErrors({...errors, 
              isBRNoError:true,
              errorBRNo:'Please Enter Valid Business Regigistration No.[Ex:-A-Z#######]' })
        }else{
            setErrors({...errors, 
              isBRNoError:false,
              errorBRNo:'' })
        }
      }

      const ValidateLatitude=()=>{
        const regex = new RegExp(/(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)
  
        if(!regex.test(values.latitude)){
          setErrors({...errors, 
            isLatitudeError:true,
            errorLatitude:'Please Enter Valid Latitude' })
      }else{
          setErrors({...errors, 
            isLatitudeError:false,
            errorLatitude:'' })
      }
    }
    const ValidateLongitude=()=>{
      const regex = new RegExp(/(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/)

      if(!regex.test(values.longitude)){
        setErrors({...errors, 
          isLongitudeError:true,
          errorLongitude:'Please Enter Valid Longitude' })
    }else{
        setErrors({...errors, 
          isLongitudeError:false,
          errorLongitude:'' })
    }
  }
        const ValidateCreatePw=()=>{
          const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{8,}$/)
    
          if(!regex.test(values.createPassword)){
            setErrors({...errors, 
              isCreatePwError:true,
              errorCreatePw:'Please Enter Valid Password.[Ex:-A-Z,a-z,#@!$%,0-10]' })
        }else{
            setErrors({...errors, 
              isCreatePwError:false,
              errorCreatePw:'' })
        }
      }
      
        const ValidateConfirmPw=()=>{
          const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{8,}$/)
    
          if(!regex.test(values.confirmPassword)){
            setErrors({...errors,
              isConfirmPwError:true,
              errorConfirmPw:'Those passwords didn’t match. Try again.' })
        }else{
            setErrors({...errors, 
              isConfirmPwError:false,
              errorConfirmPw:'' })
        }
      }

      const errorAlert=(errMsg)=>{
        errMsg=errMsg==''?"Please fill the form": errMsg
        alert(errMsg)
      }

      const createAccountFunction = (e)=>{
        e.preventDefault()
        return  errors.isNameError      || values.name              ===''    ? errorAlert(errors.errorName)
        :       errors.isCreatePwError  || values.password          ===''    ? errorAlert(errors.errorCreatePw)
        :       errors.isConfirmPwError || values.confirmPassword   ===''    ? errorAlert(errors.errorConfirmPw)
        :       errors.isAddressError   || values.address           ===''    ? errorAlert(errors.errorAddress)
        :       errors.isContactNoError || values.contactNumber     ===''    ? errorAlert(errors.errorContactNo)
        :       errors.isBRNoError      || values.brNo              ===''    ? errorAlert(errors.errorBRNo)
        :       errors.isEmailError     || values.email             ===''    ? errorAlert(errors.errorEmail)
        :       errors.isLongitudeError || values.longitude         ===''    ? errorAlert(errors.errorLongitude)
        :       errors.isLatitudeError  || values.latitude          ===''    ? errorAlert(errors.errorLatitude)
        :       RegistrationFunction(e)
    }


      const RegistrationFunction=(e)=>{
      
        const url= "http://localhost/mymachAPI/index.php/servicecenterCN/ServiceCenterRegistration"
        const data= JSON.stringify({
          name:values.name,
          address:values.address, 
          contactNo:values.contactNo,
          email:values.email,
          latitude:values.latitude,
          longitude:values.longitude,
          brNo:values.brNo,
          password:values.createPassword
        })


        axios.post(url,data).then(response=>{
          console.log(response.data)
          if(response.data.hasOwnProperty('type')&& response.data.type == 'OK'){
            alert("Registration Successfull. Please Login")
            window.location.href ="http://localhost:3000"
          }
          // else{
          //   setErrors({...errors,isPswError:true,errorPswMsg:response.data.message})
          // }
      }).catch(error=>{
         
      })
      
    }

        const handleInputChange = (e)=>{
            const name = e.target.name
            const value = e.target.value
            setValues(
                {
                    ...values,
                    [name]: value
                }
            )

          name=="name"? ValidateName(value):
          name=="address"? ValidateAddress(value):
          name=="contactNo"? ValidateContactNo(value):
          name=="email"? ValidateEmail(value):
          name=="brNo"? ValidateBRNo(value):
          name=="latitude"? ValidateLatitude(value):
          name=="latitude"? ValidateLongitude(value):
          name=="createPassword"? ValidateCreatePw(value):
          name=="confirmPassword"? ValidateConfirmPw(value):
          console.log("called");
         
        }

    return(
        <>
            <Card>
                <CardHeader title={'Service Center Registration '} align="center"/>
                <CardContent>
                    <form onSubmit={createAccountFunction}>
                      <FormControl fullWidth margin='dense' error={errors.isNameError}>
                        <TextField fullWidth id="name" label="Service Center Name" name="name" variant="outlined" onChange={handleInputChange} value={values.name} error={errors.isNameError} />
                        {
                            errors.isNameError?<FormHelperText>{errors.errorName}</FormHelperText>:'' 
                        }
                      </FormControl>

                      <FormControl fullWidth margin='dense'  error={errors.isAddressError}>
                        <TextField fullWidth id="address" label="Address" name="address" onChange={handleInputChange} value={values.address}  variant="outlined" error={errors.isAddressError}/>
                        {
                            errors.isAddressError!==''?<FormHelperText>{errors.errorAddress}</FormHelperText>:'' 
                        }
                      </FormControl>
                      <FormControl fullWidth margin='dense'  error={errors.isContactNoError}>
                        <TextField fullWidth id="ContactNo" label="Contact No" name="contactNo" onChange={handleInputChange} value={values.contactNo}variant="outlined" error={errors.isContactNoError==''? false : true} />
                        {
                            errors.contactNo!==''?<FormHelperText>{errors.errorContactNo}</FormHelperText>:'' 
                        }
                      </FormControl>
                      <FormControl fullWidth margin='dense'  error={errors.isEmailError==''? false : true}>
                        <TextField fullWidth id="email" label="E-mail" name="email" onChange={handleInputChange} value={values.email} variant="outlined"  error={errors.isEmailError} />
                        {
                            errors.email!==''?<FormHelperText>{errors.errorEmail}</FormHelperText>:'' 
                        }
                      </FormControl>
                      <FormControl fullWidth margin='dense'  error={errors.isBRNoError==''? false : true}>
                        <TextField fullWidth id="brNo" label="Business Registration No" name="brNo" onChange={handleInputChange} value={values.brNo} variant="outlined"  error={errors.isBRNoError}/>
                        {
                            errors.brNo!==''?<FormHelperText>{errors.errorBRNo}</FormHelperText>:'' 
                        }
                      </FormControl>

                      <FormControl fullWidth margin='dense'  error={errors.isLatitudeError==''? false : true}>
                        <TextField fullWidth id="latitude" label="Latitude" name="latitude" onChange={handleInputChange} value={values.latitude} variant="outlined"  error={errors.isLatitudeError} />
                        {
                            errors.latitude!==''?<FormHelperText>{errors.errorLatitude}</FormHelperText>:'' 
                        }
                      </FormControl>

                      <FormControl fullWidth margin='dense'  error={errors.isLongitudeError==''? false : true}>
                        <TextField fullWidth id="longitude" label="Longitude" name="longitude" onChange={handleInputChange} value={values.longitude} variant="outlined"  error={errors.isLongitudeError} />
                        {
                            errors.longitude!==''?<FormHelperText>{errors.errorLongitude}</FormHelperText>:'' 
                        }
                      </FormControl>

                      <FormControl fullWidth margin='dense' error={errors.isCreatePwError==''? false : true} >
                      <InputLabel htmlFor="outlined-adornment-password">Create Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        name='createPassword'
                        onChange={handleInputChange} value={values.createPassword}
                        type={ visibility? 'text' :'password'}                             
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={()=>{
                                setVisibility((prev)=>{
                                    return !prev
                                })
                              }}
                              edge="end"
                            >
                            {
                                visibility? <VisibilityOff/>:<Visibility/>
                            }
                             
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Create Password"
                      />
                      </FormControl>
                      <FormControl fullWidth margin='dense' error={errors.isConfirmPwError==''? false : true}>
                      <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        name='confirmPassword'
                        onChange={handleInputChange} value={values.confirmPassword}
                        type={ visibility? 'text' :'password'}                        
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={()=>{
                                setVisibility((prev)=>{
                                    return !prev
                                })
                              }}
                              edge="end"
                            >
                            {
                                visibility? <VisibilityOff/>:<Visibility/>
                            }
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                      />
                      </FormControl>
                      <FormControl margin='dense' fullWidth >
                      <div style={{"width":"100%","textAlign":"center"}}>
                          <Button type = "submit" style={{"minWidth":"150px"}} variant="contained" size='Large'  >
                            Register
                          </Button>
                        </div>
                        
                      </FormControl>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Registration