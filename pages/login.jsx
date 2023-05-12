import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { redirect } from 'next/dist/server/api-utils';
import axios from 'axios'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Login = ({ handleChange }) => {

    //STYLING
    const router = useRouter();
    const [Datas, setDatas] = useState([]);
   
    // console.log('Data:', Datas);
    const paperStyle = { padding: 20, height: 'auto', width: 300, margin: "0 auto", marginTop:'5rem', borderRadius:'15px 15px 15px 15px' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    //STATE
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    //VALIDATION 
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    //FUNCTION TO LOGIN
    const onSubmit = (values, props) => {
        initialValues.username = values.username;
        initialValues.password = values.password;
        console.log(valu)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    // const router = useRouter()
    const [iemail,setiEmail] = useState('')
    const [ipassword,setiPassword] = useState('')
    const [error,setError] = useState(false)
    const login = async () => {
        const response = await axios.post('http://localhost:3000/api/login/login',{
            email :  `inam@gmail.com`,
            password: `inam12345`
        })
        if(response.data.success) {
            console.log(response)
            router.replace('/users/userList')
        } 
        else setError(true) 
    }

    useEffect(()=>{
        router.prefetch('/users/userList')
    },[])

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                
                    <h2>Admin Login</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Stack gap="1rem">
                            <Field as={TextField} label='Username' name="username"
                            
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                              
                                
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} 
                                 />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth  onClick = {login}>{props.isSubmitting ? "Loading" : "Log in"}  </Button>
                        </Stack>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Login