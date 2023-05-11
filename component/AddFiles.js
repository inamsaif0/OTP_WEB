import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { redirect } from 'next/dist/server/api-utils';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '../component/Select'
import { useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function getStyles(name, personName, theme) {


    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const CreateUserForm = (props) => {
    const router = useRouter();
    const theme = useTheme();
    //STYLING
    const [teacher, setTeacher] = React.useState('');
    const [student, setStudent] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [value, setValue] = React.useState('');
    // console.log(teacher, student, level, value)
    const paperStyle = { padding: 20, height: 'auto', margin: "0 auto", marginTop: '5rem', borderRadius: '15px 15px 15px 15px' }
    // const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    //STATE

    //VALIDATION 
    // const validationSchema = Yup.object().shape({
    //     username: Yup.string().email('please enter valid email').required("Required"),
    //     password: Yup.string().required("Required")
    // })
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const initialValues = {
        student: student,
        teacher: teacher,
        level: level,
        value: value,
        photo: 'heh'
    }
    //FUNCTION TO LOGIN
    const onSubmit = (values, props) => {
        console.log(values) //this is to print the form values
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    const AddingFiles = async () => {
        const response = await axios.post('http://localhost:3000/api/content', {
            teacher: teacher,
            student: student,
            level: level,
            date: value,
            photo: ''
        })
        console.log(response)
        if (response.data.success) {
            console.log(response)
            router.replace('/content/contentList')
        }
        else setError(true)
    }

    useEffect(() => {
        router.prefetch('/content/contentList')
    }, [])

    return (
        <Grid>
            <Paper style={paperStyle} container sx={{width:{lg:400, md:300, sm:200}}} >
                <Grid align='center' item>

                    <h4>Upload Files</h4>
                </Grid>
                <Grid item>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>
                                <Stack gap='1rem'>

                                    <Field as={Select} id="select" label="Teacher" name='teacher' value={teacher} onChange={(e)=>{setTeacher(e.target.value)}}>
                                        <MenuItem value='beg1'>beg1</MenuItem>
                                        <MenuItem value='beg2'>beg2</MenuItem>
                                        <MenuItem value='beg3'>beg3</MenuItem>
                                        <MenuItem value='inter1'>inter1</MenuItem>
                                        <MenuItem value='inter2'>inter2</MenuItem>
                                        <MenuItem value='inter3'>inter3</MenuItem>
                                        <MenuItem value='advance'>advanced</MenuItem>
                                    </Field>
                                    <Field as={Select} id="select" label="Student" name='student' value={student}  onChange={(e)=>{setStudent(e.target.value)}}>
                                        <MenuItem value='beg1'>beg1</MenuItem>
                                        <MenuItem value='beg2'>beg2</MenuItem>
                                        <MenuItem value='beg3'>beg3</MenuItem>
                                        <MenuItem value='inter1'>inter1</MenuItem>
                                        <MenuItem value='inter2'>inter2</MenuItem>
                                        <MenuItem value='inter3'>inter3</MenuItem>
                                        <MenuItem value='advance'>advanced</MenuItem>
                                    </Field>
                                    <Field as={Select} id="select" label="Level" name='level' value={level} onChange={(e)=>{setLevel(e.target.value)}}>
                                        <MenuItem value='beg1'>beg1</MenuItem>
                                        <MenuItem value='beg2'>beg2</MenuItem>
                                        <MenuItem value='beg3'>beg3</MenuItem>
                                        <MenuItem value='inter1'>inter1</MenuItem>
                                        <MenuItem value='inter2'>inter2</MenuItem>
                                        <MenuItem value='inter3'>inter3</MenuItem>
                                        <MenuItem value='advance'>advanced</MenuItem>
                                    </Field>
                                    <Field as={LocalizationProvider} dateAdapter={AdapterDayjs} name='date'>

                                        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                                    </Field>
                                    <label htmlFor="upload-photo">
                                        <input
                                            style={{ display: "none" }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                        
                                        />

                                        <Button color="secondary" variant="contained" component="span" fullWidth>
                                            Files
                                        </Button>{" "}
                                    </label>
                                    <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                        style={btnstyle} fullWidth onClick={AddingFiles}>{props.isSubmitting ? "Loading" : "Upload"}</Button>
                                </Stack>

                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default CreateUserForm;