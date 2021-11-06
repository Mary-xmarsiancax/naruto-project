import React from 'react';
import s from "./Profile.module.css";
import {Field, Form, Formik} from "formik";

class ProfileStatus extends React.Component {
    formikRef = React.createRef();
    inputRef = React.createRef();

    constructor() {
        super();
        this.state = {
            editMode: false,
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });

        setTimeout(() => this.inputRef.current.select(), 0);
        this.showJSCycle();
    }

    showJSCycle() {
        console.log("START");
        setTimeout(() => console.log("SET TIMEOUT"));
        Promise.resolve().then(() => console.log("PROMISE"));
        console.log("END")
    }

    onSubmitStatus = (formData) => {
        this.setState({
            editMode: false
        })
        this.props.updateUsersStatus(formData.status)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onBlur = () => {
        this.formikRef.current.submitForm();
    }

    render() {
        return (<div>
                {this.state.editMode ?
                    <Formik innerRef={this.formikRef}
                        initialValues={{
                            status: this.props.status
                        }}
                        onSubmit={this.onSubmitStatus}
                    >
                        <Form>
                            <div>
                                <Field innerRef={this.inputRef} id="status" name="status" placeholder="add status" onBlur={this.onBlur}/>
                            </div>
                        </Form>
                    </Formik>
                    : <div className={s.usersStatus}
                           onDoubleClick={this.activateEditMode}>{this.props.status || "no status yet"}</div>}
            </div>
        )
    }
}

export default ProfileStatus;