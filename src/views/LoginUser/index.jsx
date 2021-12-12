import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { FormField } from '../../components/FormField'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from "yup";
import { loginUser } from "../../services/userServices"
import { saveUser } from '../../config/storage'
import Grid from '@material-ui/core/Grid'


function Login() {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("e-mail is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Enter at least 8 characters")
        .max(50, "Enter at least 50 characters"),
    }),
    onSubmit: async (values, { setErrors }) => {
      const response = await loginUser(values);

      //necessario refatoração utilizando redux para manter o usuário cadastrado
      const userEmail = "luiz_alak@hotmail.com"

      saveUser(JSON.stringify(response.data))

      if (response !== null) {
        localStorage.setItem('@currency_quotation/userEmail', userEmail)
      }

      history.push("/");
    },
  })

  const getFieldProps = (fieldName) => ({
    ...formik.getFieldProps(fieldName),
    isValid: formik.touched[fieldName] && !formik.errors[fieldName],
    isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
    error: formik.errors[fieldName],
  });

  return (
    <Grid
      container item xs={12} spacing={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item xs={3}
      >
        <PageTitle>Login</PageTitle>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <FormField
              {...getFieldProps("email")}
              label="Email"
              placeholder="E-mail"
            />

          </div>
          <div>
            <FormField
              {...getFieldProps("password")}
              type="password"
              label="Password"
              placeholder="Enter your access password"
              maxLength={50}
            />
          </div>
          <div>
            <Button
              variant="primary"
              type="submit"
              loading={formik.isValidating || formik.isSubmitting || false}
              disabled={!formik.isValid || formik.isSubmitting || false}
            >
              Login
            </Button>
          </div>
          <div>
            <Link to="/users/register">Register here</Link>
          </div>
        </Form >
      </Grid>
    </Grid>

  )
}

export default Login