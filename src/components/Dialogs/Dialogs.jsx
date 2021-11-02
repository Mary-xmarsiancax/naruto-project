import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogLogo from "../../images/dialogsLogo.png";
import Answer from "./Answers/Answer";
import {Formik, Field, Form} from 'formik';


const Dialogs = (props) => {
    let answerElements = props.answers.map(a => (
        <div key={a.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt="dialogLogo" width='50px' height='50px'/>
                <Answer key={a.id} answer={a.answer} id={a.id}/>
            </div>
        </div>
    ));
    let dialogsElements = props.dialogData.map(d => <DialogItem key={d.id} name={d.name} ava={d.ava}
                                                                id={d.id}/>);
    let messagesElements = props.messages.map(m => (
        <div key={m.id}>
            <div className={s.dFlex}>
                <img src={dialogLogo} alt='alt' width='50px' height='50px'/>
                <Message key={m.id} message={m.message} id={m.id}/>
            </div>
        </div>));

    const onSubmitMessage = (formData, helper) => {
        helper.resetForm();
        props.addMessage(formData);
    }
    const onSubmitAnswer = (formData, helper) => {
        helper.resetForm();
        props.addAnswer(formData);
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.DialogsItem}>
                {messagesElements}
                <Formik
                    initialValues={{
                        message: ""
                    }}
                    onSubmit={onSubmitMessage}
                >
                    <Form>
                        <div>
                            <Field id="message" name="message" placeholder="add message"/>
                            <button type="submit">Add message</button>
                        </div>
                    </Form>
                </Formik>

            </div>
            <div className={s.DialogsItem}>
                {answerElements}
                <Formik
                    initialValues={{
                        answer: ""
                    }}
                    onSubmit={onSubmitAnswer}
                >
                    <Form>
                        <div>
                            <Field id="answer" name="answer" placeholder="add answer"/>
                            <button type="submit">Add message</button>
                        </div>
                    </Form>
                </Formik>
                {/*<textarea onChange={onAnswerChange} value={props.newAnswerText}/>*/}
                {/*<button onClick={addAnswer}>Add new Answer</button>*/}
            </div>

        </div>
    )
}
export default Dialogs;