import {Formik, Field, Form} from 'formik';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData)
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
            <Form>
                <div>
                    <label htmlFor="email">Login</label>
                    <Field id="email" name="email" placeholder="neo@mail.ru"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="***********"/>
                </div>
                <div>
                    <label htmlFor="rememberMe">rememberMe</label>
                    <Field id="rememberMe" name="rememberMe" type="checkbox"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </Form>
        </Formik>
    </div>
}
export default Login;