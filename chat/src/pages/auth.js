import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { Link } from "react-router-dom";
import {login, logout} from '../store/user'

import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Form,
  CardHeader,
} from "@material-ui/core";

const AuthPage = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const dispatch = useDispatch()
  const history = useHistory();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Email: " + values.username + " Password: " + values.password);

    dispatch(login({username: values.username, password: values.password}))
    history.push('/dashboard/sd')
    // You should see email and password in console.
    // ..code to submit form to backend here...
  }

  return (
    <Container className="mt-10" maxWidth="sm">
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="p-5">
            <Typography gutterBottom variant="h5" component="h2">
              Login Form
            </Typography>
          </div>
          <CardContent>
            <div> {values.username}</div>
            <div className="py-2">
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  id="my-input"
                  name="username"
                  aria-describedby="my-helper-text"
                  defaultValue={values.username}
                  onChange={handleInputChange}
                />
                {/* <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText> */}
              </FormControl>
            </div>
            <div className="py-2">
              <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input
                  id="my-input"
                  type="password"
                  name="password"
                  aria-describedby="my-helper-text"
                  defaultValue={values.password}
                  onChange={handleInputChange}
                />
                {/* <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText> */}
              </FormControl>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" type="submit" color="primary">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>

      {/* <Link to="/main">About</Link> */}
    </Container>
  );
};
AuthPage.Layout = AuthLayout;
export default AuthPage;
