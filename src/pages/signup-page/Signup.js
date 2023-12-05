import React from 'react';
import { TextField, Button, Link, Typography, Container, CssBaseline, Grid, Box, FormHelperText, Paper } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Div from '../../shared/Div/Div';
import logo from '../../images/darklogo.svg'
import { Link as RouterLink } from 'react-router-dom';

const validationSchema = yup.object({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    email: yup.string('Enter email').email('Invalid email').required('Email is required'),
    password: yup.string('Enter password').required('Password is required'),
});


const Signup = () => {


    const handleSubmit = (data, { setSubmitting, resetForm }) => {
        console.log("data", data);
        // Handle form submission logic here

        // Example: Assume form submission is successful, then reset the form
        resetForm();
        setSubmitting(false);
    };

    return (
        <>
            <Container component="main" sx={{ height: "100vh", display: "flex", justifyContent:"center", alignItems: "center", mt: 2, }}>
                <CssBaseline />
                <Paper elevation={3} sx={{ padding: "10px", height: "90%", minWidth:"50%" }}>
                    <Div>
                        <Typography component="h1" variant="h5" sx={{p:3}}>
                        SIGN UP
                        </Typography>
                        <Formik
                            initialValues={{
                                firstname:'',
                                lastname:'',
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(data, { setSubmitting, resetForm }) => {
                                console.log("dataFormik", data)
                                handleSubmit(data, { setSubmitting, resetForm });
                            }}
                        >
                            <Form>
                            <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        as={TextField}
                                        fullWidth
                                        label="First Name"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="firstname" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        as={TextField}
                                        fullWidth
                                        label="Last name"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="lastname" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        as={TextField}
                                        fullWidth
                                        label="Enter Email"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="email" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>

                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="password"
                                        name="password"
                                        type="password"
                                        as={TextField}
                                        fullWidth
                                        label="Enter Password"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="password" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mb: 3, pl: 2, pr: 2 }}>
                                    <Button type="submit" fullWidth variant="contained" sx={{background:"#FFA500", height:"45px",borderRadius:"15px"}}>
                                        Signup
                                    </Button>
                                </Box>

                            </Form>
                        </Formik>
                        <Grid item p={3} > ALREADY HAVE AN ACCOUNT? 
                                <Link to='/login' component={RouterLink} variant="body2">
                                    LOGIN
                                </Link>
                            </Grid>
                    </Div>
                </Paper>
            </Container >
        </>


    );
};

export default Signup;
