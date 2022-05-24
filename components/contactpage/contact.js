import React from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../config/configs";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Must be a number!"),
  Email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function messagesForm() {
  return (
    <div className="contact">
      <div className="contact_wrapper">
        <div className="contact_text">
          <p className="contact_title">Contact Information </p>
          <p className="contact_description">
            Fill up the form, and our team will get back to you within 24 hrs.
          </p>
          <div className="contact_information">
            <p className="contact_phone">
              <Icon className="contact_icon" icon="bxs:phone" color="black" />
              0047 123 45 678
            </p>
            <p className="contact_phone">
              <Icon
                className="contact_icon"
                icon="ant-design:mail-outlined"
                color="black"
              />
              primavera@hello.no
            </p>
            <p className="contact_phone">
              <Icon
                className="contact_icon"
                icon="carbon:location-filled"
                color="black"
              />
              Oslo, Norway
            </p>
          </div>
        </div>
        <div className={"messages"}>
          <Formik
            initialValues={{
              Name: "",
              Subject: "",
              Email: "",
              Message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(messageToPrimaVera) => {
              async function sendMessage() {
                let response = await axios.post(
                  `${BASE_URL}/messages`,
                  messageToPrimaVera
                );
                console.log(response);
                alert("Your message has now been sent. Thank you!");
              }
              sendMessage();
            }}
          >
            {({ errors, touched }) => (
              <Form className="contact_contactform w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <h5 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </h5>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="Name"
                  />
                  {errors.Name && touched.Name ? (
                    <div>{errors.Name}</div>
                  ) : null}
                  <h5 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Subject
                  </h5>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="Subject"
                  />
                  {errors.Subject && touched.Subject ? (
                    <div>{errors.Subject}</div>
                  ) : null}
                  <h5 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </h5>
                  <Field
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="Email"
                  />
                  {errors.Email && touched.Email ? (
                    <div>{errors.Email}</div>
                  ) : null}
                  <h5 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Message
                  </h5>
                  <Field
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                    name="Message"
                    type="textarea"
                    component="textarea"
                  />
                  {errors.Message && touched.Message ? (
                    <div>{errors.Message}</div>
                  ) : null}
                  <button
                    className="contact_sendbtn shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default messagesForm;
