import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { redirect } from 'next/dist/server/api-utils';
import Select from '../component/Select';

const CreateUserForm = ( props,{ handleChange }) => {

    //STYLING
    const paperStyle = { padding: 20, height: '73vh', width: 400, margin: "0 auto", marginTop:'5rem', borderRadius:'15px 15px 15px 15px' }
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
        
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                
                    <h4>{props.value}</h4>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form action='../api/login' method='post' >
                            <Stack gap='1rem'>
                            <Field as={TextField} label='Name ' name="Name"
                                placeholder='Enter Name' fullWidth required
                                helperText={<ErrorMessage name="Name" />}
                            />
                            <Field as={TextField} label='Email' name="Email"
                                placeholder='Enter Email' type='email' fullWidth required
                                helperText={<ErrorMessage name="email" />} />

                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            
                            
                            <Select level="Level"/>
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth href="/users/userList">{props.isSubmitting ? "Loading" : "Create User"}</Button>

                            </Stack>
                            {/* <Field as={TextField} label='Name ' name="Name"
                                placeholder='Enter Name' fullWidth required
                                helperText={<ErrorMessage name="Name" />}
                            />
                            <Field as={TextField} label='Email' name="Email"
                                placeholder='Enter Email' type='email' fullWidth required
                                helperText={<ErrorMessage name="email" />} />

                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth href="../dashboard">{props.isSubmitting ? "Loading" : "Log in"}</Button> */}
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default CreateUserForm