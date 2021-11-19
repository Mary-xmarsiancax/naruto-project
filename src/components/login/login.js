import {Formik, Field, Form} from 'formik';
import {validateEmail, validatePassword} from "../common/validate/validate";
import s from "../content/Profile/MyPosts/MyPosts.module.css";
import React from "react";
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const history = useHistory();

    const onSubmit = (formData) => {
        let promise = props.login(formData);

        promise.then((userId) => {
            console.log(userId);
            if (userId){
               history.push(`profile/` + userId)
                console.log(props);
            }
            // response.userId ? withProfileRedirect(response.userId) : withProfileRedirect( "19081")
        })
    }

    return <div>
        <h1>login</h1>
        <Formik
            initialValues={
                {
                    email: "",
                    password: "",
                    rememberMe: false,
                    captcha: false

                }
            }
            onSubmit={onSubmit}
        >
            {({errors, touched, isValidating}) => (
                <Form>
                    <div>
                        <label htmlFor="email">Login</label>
                        <Field id="email" validate={validateEmail} name="email" placeholder="neo@mail.ru"/>
                        {errors.email && touched.email && <div className={s.divError}>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" validate={validatePassword} name="password" placeholder="***********"/>
                        {errors.password && touched.password && <div className={s.divError}>{errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="rememberMe">rememberMe</label>
                        <Field id="rememberMe" name="rememberMe" type="checkbox"/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}
export default Login;