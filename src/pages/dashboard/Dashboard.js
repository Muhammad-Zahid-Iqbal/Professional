import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Grid, TextField, Button, Box, Typography, FormHelperText, IconButton, Avatar, Select, InputAdornment, MenuItem, InputLabel, FormControl } from '@mui/material';
import Div from '../../shared/Div/Div';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { postRequest } from '../../backendservices/ApiCalls';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMyContext } from '../../components/vertical-default/VerticalDefault';


const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    // email: Yup.string().email('Invalid email address').required('Email is required'),
    education: Yup.string().required('Education is required'),
    phone: Yup.string().required('Phone is required'),
    city: Yup.string().required('City is required'),
    detail: Yup.string().required('Detail is required'),
});

const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedLocation, setSelectedLocation] = React.useState();
    const {loginUserData} = useMyContext();
    console.log("loginUserData",loginUserData);
    const location = useLocation();



    const useremail = location?.state?.useremail;
    console.log("useremail", useremail)

    const handleChangeSelect = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64Data = reader.result;
                if (base64Data) {
                    setSelectedImage(base64Data)
                    console.log("Image loaded successfully!", base64Data);
                } else {
                    console.log("Error loading image.");
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCameraClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSubmit = (data, setSubmitting, resetForm) => {
        let params = {
            profilepic:selectedImage,
            education: data.education,
            user_type: data.type,
            email: useremail,
            mobile:data.phone,
            city:data.city,
            detail: data.detail
        }
        console.log("params", params)
        postRequest(
            "/updateuserdata",
            params,
            (response) => {
                if (response?.data?.status === "success") {
                    console.log("data added successfully");
                    resetForm();
                    // setIsSubmitted(true);
                    // setTimeout(() => {
                    //     setIsSubmitted(false);
                    // }, 3000);
                } else {
                    console.log("response not getting")
                }

            },
            (error) => {
                console.log(error?.response?.data);
            }
        );
    };
    // const ErrorText = styled('div')({
    //     color: 'red',
    //     fontSize: '16px',
    //     marginTop: '-10px', // Adjust this value as needed
    //   });
    return (
        <Formik
            initialValues={{
                image: '',
                name: '',
                email: useremail || '',
                education: '',
                type: selectedLocation || '',
                phone: "",
                city: '',
                detail: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                handleSubmit(data, { setSubmitting, resetForm });
            }}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
                            <Div>
                                <Box
                                    sx={{ display: "flex", cursor: "pointer", justifyContent: "center", position: "relative" }}
                                    p={1}
                                    // border={1}
                                    width={"160px"}
                                    margin={"auto"}
                                    mt={2}
                                    onClick={handleCameraClick}
                                >
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Image Preview"
                                            style={{ cursor: "pointer", border: "1px solid lightgrey", width: '140px', height: '140px', borderRadius: '50%', objectFit: "cover", }}
                                        />
                                    ) : (
                                        <Avatar
                                            sx={{
                                                width: '140px',
                                                height: '140px',
                                                borderRadius: '50%',
                                                backgroundColor: '#f2f2f2',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {/* You can customize the placeholder icon or text */}
                                            <PhotoCameraIcon fontSize="large" color="action" />
                                        </Avatar>
                                    )}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                        capture="environment"
                                    />
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '20px',
                                            // background: 'rgba(255, 255, 255, 0.8)',
                                            background: 'lightblue',
                                        }}
                                        component="span"
                                        size="small"
                                        color="success"
                                    >
                                        <PhotoCameraIcon />
                                    </IconButton>
                                </Box>
                            </Div>
                            <Grid container spacing={2} padding={2}>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="Name"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="name" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            as={TextField}
                                            fullWidth
                                            label="Email"
                                            sx={{ background: 'lightgrey' }}
                                            InputProps={{
                                                readOnly: true,
                                            }}

                                        />
                                        {/* <ErrorText>
                                            <ErrorMessage name="email" />
                                        </ErrorText> */}
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="education"
                                            name="education"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="Education"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="education" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">File</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="type"
                                                value={selectedLocation}
                                                label="File"
                                                onChange={(event) => {
                                                    handleChangeSelect(event);
                                                    setFieldValue("type", event.target.value); // Update the Formik field
                                                }}
                                                required
                                            >
                                                <MenuItem value="Tutors">Tutors</MenuItem>
                                                <MenuItem value="Assessors">Assessors</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            as={TextField}
                                            fullWidth
                                            label="Phone"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="phone" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="city"
                                            name="city"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="City"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="city" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                            </Grid>


                            <Box mt={1} mb={3} pl={2} pr={2}>
                                <Field
                                    id="detail"
                                    name="detail"
                                    type="text"
                                    as={TextField}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Detail"
                                    helperText={
                                        <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                            <ErrorMessage name="detail" />
                                        </FormHelperText>
                                    }
                                />
                            </Box>

                            {/* Add similar code for other fields */}

                            <Box mb={3} pl={2} pr={2}>
                                <Button type="submit" fullWidth variant="contained" sx={{ background: "#FFA500", height: "45px", borderRadius: "15px" }}>
                                    Signup
                                </Button>
                            </Box>
                        </Grid>


                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default Dashboard;
