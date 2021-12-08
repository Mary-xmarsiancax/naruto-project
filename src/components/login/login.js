import {Formik, Field, Form} from 'formik';
import {validateEmail, validatePassword} from "../common/validate/validate";
import s from "../content/Profile/MyPosts/MyPosts.module.css";
import React from "react";
import {useHistory} from 'react-router-dom';


const Login = ({login, messages}) => {

    const history = useHistory();
    const onSubmit = (formData) => {
        let promise = login(formData);

        promise.then((userId) => {
            if (userId) {
                history.push(`profile/` + userId)
            }
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
                        <Field id="email" validate={validateEmail} name="email" placeholder="xmarsiancax@mail.ru"/>
                        {errors.email && touched.email && <div className={s.divError}>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" validate={validatePassword} name="password" placeholder="timofey13"/>
                        {errors.password && touched.password && <div className={s.divError}>{errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="rememberMe">rememberMe</label>
                        <Field id="rememberMe" name="rememberMe" type="checkbox"/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                        {messages.length ? <div className={s.messagesErrElShow}>{messages}</div> : null}
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}
export default Login;