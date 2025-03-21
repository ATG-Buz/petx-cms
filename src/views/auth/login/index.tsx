import React, { useState } from 'react';
import useStyles from './login.styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from "next/image"
import Slider from 'react-slick';
import TextFieldBooking from '@/components/TextFieldBooking/TextFieldBooking';
import { useMediaQuery } from '@mui/material';
import { toast } from "react-toastify"
import { useFormik } from "formik";
import Link from 'next/link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { ReactComponent as IconEmailOutline } from '@/assets/icons/email-ouline-black.svg';
import { ReactComponent as IconPassWorkOutline } from '@/assets/icons/passWord-outLine.svg';
import { gotoPage } from '@/utils/helpers/common';
import { LoginApi } from '@/utils/api'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "#5B5B5B",
          borderRadius: "60%",
        }}
        className="dots-slider"
      >
      </div>
    )
  };

const Login = () => {
  const { classes } = useStyles();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isMb = useMediaQuery('(max-width:899px)');
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(true);
  const [formSubmitted, setFormSubmitted] = useState(0);

  const dataImage= [
    {
        id: 0,
        path: '/image/login/login-1.webp'
    },
    {
        id: 1,
        path: '/image/login/login-2.webp'
    },
    {
        id: 2,
        path: '/image/login/login-3.webp'
    },
  ]

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, handleSubmit, handleChange, errors } = useFormik(
    {
      initialValues,
    //   validationSchema: validationSchema,
      onSubmit: () => onSubmit(),
    }
  );

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  };

  const onSubmit = async () => {
    const body = {
        email: values.email,
      password: values.password,
    };
    try {
      const res = await LoginApi.postLogin({
        params: body
      })
      if (res.data.status === 200) {
        toast.success(`${t('login success')}`)
        localStorage.setItem('email-petX', res.data.data.email)
        localStorage.setItem('phone-petX', res.data.data.phone)
      }
      else {
        toast.error(`${t('Username or password is incorrect')}`);
      }
    } catch (err) {
      toast.error(`${t('Username or password is incorrect')}`);
    }
  };

  return (
    <>
      {!isLogin && (
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(var(--1dvh, 1vh) * 100)',
            backgroundColor: 'rgba(243, 112, 33, 1)'
          }}
        >
          <div className={classes.container}>
            <style>
              {`
                    .slick-slider{
                      width:70%;
                      margin-bottom: -7px;
                    }
                    .slick-arrow {
                      display: none!important;
                    }
                    .slick-dots li.slick-active div.dots-slider {
                      background-color: rgba(243, 112, 33, 1) !important;
                    }
                    .slick-dots {
                      bottom: -10%;
                      left: -15%;
                  }
                  .MuiFormControlLabel-label{
                    font-family: Open Sans!important;
                    font-size: 12px!important;
                    font-weight: 400!important;
                    line-height: 16px!important;
                  }
                  .MuiInputBase-input{
                    height: 22px !important;
                    padding: 0px;
                  }
            `}
            </style>
            {!isMb && <Slider {...settings} className={classes.containerSlider} autoplay>
              {dataImage.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.path}
                    alt={''}
                    className={classes.imgSlider}
                  />
                </div>
              ))}
            </Slider>}
            <div className={classes.contentForm}>
              <div className={classes.contentFormRight}>
                <img src={'/image/logo/logo.webp'} alt='' className={classes.imgLogo} />
                <span className={classes.titleH1}>{t('SIGN IN')}</span>
                <p className={classes.titleTextField}>{t('Email')}</p>
                <TextFieldBooking
                  id="email"
                  placeholder={`${t('Email')}`}
                  name="email"
                  type="text"
                  IconStart={<IconEmailOutline />}
                  onClick={handleClickShowPassword}
                  IconEndDisable={false}
                  IconStartDisable={true}
                  value={values.email}
                  onChange={handleChange("email")}
                  style={{ width: "70%" }}
                  onKeyDown={handleKeyDown}
                />
                <p className={classes.titleTextField}>{t('PassWord')}</p>
                <TextFieldBooking
                  id="password"
                  placeholder={`${t('PassWord')}`}
                  name="password"
                  type={showPassword ? "password" : "text"}
                  IconStart={<IconPassWorkOutline />}
                  onClick={handleClickShowPassword}
                  parameter={showPassword}
                  IconEndDisable={true}
                  IconStartDisable={true}
                  value={values.password}
                  onChange={handleChange("password")}
                  style={{ width: "70%" }}
                  onKeyDown={handleKeyDown}
                />
                <div className={classes.content2}>
                  {!isMb ? <FormControlLabel control={<Checkbox />} label={`${t('Remember me')}`} className={classes.textCheckBox} /> : null}
                  <Link href='/ResetPassword' className={classes.textForgot}>
                    {t('Forgot password?')}
                  </Link>
                </div>
                <Button variant="contained"
                  className={classes.buttonSignIn}
                  type='submit'
                  onKeyDown={handleKeyDown}
                  onClick={() => { handleSubmit(), setFormSubmitted(formSubmitted + 1) }}
                >
                  {t('Sign in')}
                </Button>
                <div className={classes.content3}>
                  <p className={classes.text}>{t('Don’t have an account?')}</p>
                  <span className={classes.textContact}
                    onClick={() => {
                      gotoPage('/'), localStorage.setItem("menuData", JSON.stringify({
                        id: "leasingEnquiry",
                        name: "Leasing Enquiry",
                      },));
                    }}
                  >{t('Contact us')}</span>
                </div>
              </div>
            </div>
          </div>
          <Grid container spacing={isMb ? 0 : 2} className={classes.content4}>
            <Grid item xs={isMb ? 0 : 7.25} style={{ backgroundColor: "white", height: "100%" }}>
            </Grid>
            <Grid item xs={isMb ? 12 : 4.75} style={{ backgroundColor: "rgba(243, 112, 33, 1)", height: "100%" }}>
            </Grid>
          </Grid>

        </Box>
      )}
    </>
  );
};

export default Login;