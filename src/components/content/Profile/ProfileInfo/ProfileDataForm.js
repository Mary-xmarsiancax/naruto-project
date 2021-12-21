import React, {useEffect, useState} from "react";
import {Formik, Field, Form} from 'formik';


const ProfileDataForm = (props) => {
    const onSubmit = (dataForm) => {
        props.setProfileFormData(dataForm)
       props.ExitToEditForm()
    }

    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        const initialState = Object.keys(props.profile.contacts).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        setContacts(initialState)
    }, []);


    return <div>
        {contacts ? <Formik
            initialValues={
                {
                    fullName: "Mary",
                    aboutMe: "norm",
                    lookingForAJob: false,
                    lookingForAJobDescription: "lalalalla",
                    contacts: contacts
                }
            }

            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="fullName">
                        <div>Имя</div>
                    </label>
                    <Field id="fullName" name="fullName" placeholder="Harry Potter" />
                </div>
                <div>
                    <label htmlFor="aboutMe">
                        <div>О себе</div>
                    </label>
                    <Field id="aboutMe" name="aboutMe" placeholder="to learn a magic"/>
                </div>
                <div>
                    <label htmlFor="lookingForAJob">
                        <div>Нахожусь в поиске работы</div>
                    </label>
                    <Field id="lookingForAJob" name="lookingForAJob" type="checkbox"/>
                </div>
                <div>
                    <label htmlFor="lookingForAJobDescription">
                        <div>Отношение к работе</div>
                    </label>
                    <Field id="lookingForAJobDescription" name="lookingForAJobDescription" placeholder=""/>
                </div>
                <div>
                    Контакты:{Object.keys(contacts).map(key =>
                    <Contacts key={key} contactItem={key} contactValue={contacts[key]? contacts[key] : "I don't know"}
                    />
                )}
                </div>
                <button type="submit">save Form</button>
            </Form>
        </Formik> : undefined}
    </div>
}
const Contacts = (props) => {
    return <div>
        <label htmlFor={props.contactItem}>
            <div>{props.contactItem}</div>
        </label>
        <Field id={props.contactItem} name={"contacts." + props.contactItem} placeholder={props.contactValue}/>
    </div>
}
export default ProfileDataForm;