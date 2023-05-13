import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack, Autocomplete } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
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
    const [inputvalue, setInputvalue] = React.useState(null)
    const [inputvalue1, setInputvalue1] = React.useState(null)
    const [inputvalue2, setInputvalue2] = React.useState(null)
    const [teacher, setTeacher] = React.useState(null);
    const [student, setStudent] = React.useState(null);
    const [level, setLevel] = React.useState(null);
    const [value, setValue] = React.useState('');
    const [date, setDate] = React.useState('')
    const [image, setImage]  = React.useState(null);
    const [imageinput, setImageinput] = React.useState(null);
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
    const initialValues = {
        student: '',
        teacher: '',
        level: '',
        value: '',
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
        // console.log(teacher.teacher)
        // console.log(student.student)
        // console.log(level.level)
        // console.log(date)}
        console.log(imageinput);
        const response = await axios.post('http://localhost:3000/api/content', {
            teacher: teacher.teacher,
            student: student.student,
            level: level.level,
            filename:imageinput,
            date: date,
        })
        console.log(response)
        if (response.data.success) {
            console.log(response)
            router.replace('/content/contentList')
        }
        else setError(true)

    }
    useEffect(() => {
        fetch('http://localhost:3000/api/content')
            .then((response) => response.json())
            .then((data) => setValue(data))
    }, []);


    const defaultProps = {
        options: value.data,
        getOptionLabel: (option) => option.teacher,
    };
    const defaultProps2 = {
        options: value.data,
        getOptionLabel: (option) => option.student,
    };
    const defaultProps3 = {
        options: value.data,
        getOptionLabel: (option) => option.level,
    };
    const handleChange = (e) => {
        const File = e.target.files[0];
        console.log(File)
        setImageinput(File)
    
        const fileReader = new FileReader();
        fileReader.onload = function(e){
            setImage(e.target.result)
        }
        fileReader.readAsDataURL(File);
    }

    return (
        <Grid>
            <Paper style={paperStyle} container sx={{ width: { lg: 400, md: 300, sm: 200 } }} >
                <Grid align='center' item>

                    <h4>Upload Files</h4>
                </Grid>
                <Grid item>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        {(props) => (
                            <Form>
                                <Stack gap='1rem'>
                                    <Field as={Autocomplete} name="teacher"
                                        {...defaultProps}
                                        value={teacher}
                                        onChange={(event, newValue) => {
                                            setTeacher(newValue);
                                        }}
                                        inputValue={inputvalue}
                                        onInputChange={(event, newInputValue) => {
                                            setInputvalue(newInputValue);
                                        }}
                                        id="controllable-states-demo"

                                        renderInput={(params) => <TextField {...params} placeholder='Teacher' />}
                                        fullWidth
                                    />
                                    <Field as={Autocomplete} name="student"
                                        {...defaultProps2}
                                        value={student}
                                        onChange={(event, newValue) => {
                                            setStudent(newValue);
                                        }}
                                        inputValue={inputvalue1}
                                        onInputChange={(event, newInputValue) => {
                                            setInputvalue1(newInputValue);
                                        }}
                                        id="controllable-states-demo"

                                        renderInput={(params) => <TextField {...params} placeholder='Student' />}
                                        fullWidth
                                    />
                                    <Field as={Autocomplete} name="level"
                                        {...defaultProps3}
                                        value={level}
                                        onChange={(event, newValue) => {
                                            setLevel(newValue);
                                        }}
                                        inputValue={inputvalue2}
                                        onInputChange={(event, newInputValue) => {
                                            setInputvalue2(newInputValue);
                                        }}
                                        id="controllable-states-demo"

                                        renderInput={(params) => <TextField {...params} placeholder='Level' />}
                                        fullWidth
                                    />
                                    {/* </Field> */}
                                    <Field as={LocalizationProvider} dateAdapter={AdapterDayjs} name='date'>

                                        <DatePicker value={date} onChange={(newValue)=>{setDate(newValue)}} />
                                    </Field>
                                  
                                        <input
                                            style={{backgroundColor:'ActiveCaption',color:'#FFF'}}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                            onChange={handleChange}
                                        />

                                        <Button color="secondary" variant="contained" component="span" fullWidth>
                                            Upload Files
                                        </Button>{" "}
                                        
                                   
                                    <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                        style={btnstyle} fullWidth onClick={AddingFiles}>{props.isSubmitting ? "Loading" : "Add Content"}</Button>
                                </Stack>

                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Paper >
        </Grid >
    )
}


export default CreateUserForm;