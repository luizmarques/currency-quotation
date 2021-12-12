import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup";
import { PageTitle } from '../../components/PageTitle'
import { FormField } from '../../components/FormField'
import { Button, Form } from 'react-bootstrap'
import { registerUser } from "../../services/userServices"
import { useHistory } from 'react-router'
import Grid from '@material-ui/core/Grid'


function Register() {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      favoriteCurrency: "",
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Preencha o nome.")
        .min(5, "Informe pelo menos 5 caracteres."),
      email: yup
        .string()
        .required("Preencha o e-mail.")
        .email("Preencha um e-mail válido."),
      password: yup
        .string()
        .required("Preencha a senha.")
        .min(8, "Informe pelo menos 8 caracteres.")
        .max(50, "Informe no máximo 50 caracteres."),
      agree: yup.boolean().equals([true], "É preciso aceitar os termos."),
    }),
    onSubmit: async (values, { setErrors }) => {
      await registerUser(values)
      history.push("/users/login")
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
        <PageTitle>Register</PageTitle>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <FormField
              {...getFieldProps("name")}
              label="Name"
              placeholder="Name"
            />
          </div>
          <div>
            <FormField
              {...getFieldProps("email")}
              label="E-mail"
              placeholder="E-mail"
            />
          </div>
          <div>
            <FormField
              {...getFieldProps("password")}
              type="password"
              label="Password"
              placeholder="Informe sua senha de acesso"
              maxLength={50}
            />
          </div>
          <Form.Group>
            <Form.Check
              {...formik.getFieldProps("agree")}
              type="checkbox"
              label={
                <span>
                  I read and accept the{" "}
                  <a href="/terms-of-use.pdf" target="_blank">
                    Terms of use
                  </a>
                  .
                </span>
              }
            />
            {formik.touched.agree && formik.errors.agree && (
              <Form.Control.Feedback type="invalid" className="d-block">
                {formik.errors.agree}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <div>
            <Button
              variant="primary"
              type="submit"
              loading={formik.isValidating || formik.isSubmitting || false}
              disabled={!formik.isValid || formik.isSubmitting || false}
            >
              Criar
            </Button>
          </div>
        </Form >
      </Grid>
    </Grid>
  )
}

export default Register