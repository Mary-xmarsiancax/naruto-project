import React, {useRef, useState} from 'react';
import s from "./Profile.module.css";
import {Field, Form, Formik} from "formik";

const ProfileStatus = (props) => {
    let formikRef = useRef();
    let inputRef = useRef();

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
        setTimeout(() => inputRef.current.select(), 0);
    }

    let onSubmitStatus = (formData) => {
        setEditMode(false)
        props.updateUsersStatus(formData.status)
    }

    const onBlur = () => {
        formikRef.current.submitForm();
    }

    return (<div>
            {editMode ?
                <Formik innerRef={formikRef}
                        initialValues={{
                            status: props.status
                        }}
                        onSubmit={onSubmitStatus}
                >
                    <Form>
                        <div>
                            <Field innerRef={inputRef} id="status" name="status" placeholder="add status"
                                   onBlur={onBlur}/>
                        </div>
                    </Form>
                </Formik>
                : <div className={s.usersStatus}
                       onDoubleClick={props.isOwner?activateEditMode:null}>Статус: {props.status || "no status yet"}</div>}
        </div>
    )
}

export default ProfileStatus;