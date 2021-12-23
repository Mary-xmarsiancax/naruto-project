import {Formik, Field, Form} from 'formik';
import {validateEmail, validatePassword} from "../common/validate/validate";
import s from "../content/Profile/MyPosts/MyPosts.module.css";
import React from "react";
import {useHistory} from 'react-router-dom';


const Login = ({login, messages, captchaUrl,getCaptchaUrl}) => {

    const history = useHistory();
    const onSubmit = (formData) => {
        let promise = login(formData);
        promise.then((userId) => {
            if (userId) {
                history.push(`profile/` + userId)
            }
        })
    }
    const onUpdateCaptcha = () => {
        getCaptchaUrl()
    }

    return <div>
        <h1>login</h1>
        <Formik
            initialValues={
                {
                    email: "",
                    password: "",
                    rememberMe: false,
                    captcha: ""


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
                    {captchaUrl &&
                    <div>
                    <div>
                        <label htmlFor="captcha">captcha</label>
                        <Field id="captcha" name="captcha" placeholder="captcha text"/>
                    </div>
                        <img src={captchaUrl}/>
                        <div>
                            <button onClick={onUpdateCaptcha}>update captcha</button>
                        </div>
                    </div>
                    }
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