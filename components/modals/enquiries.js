import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../config/configs";

const SignupSchema = Yup.object().shape({
  FirstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  LastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Must be a number!"),
  Subject: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const EnquiriesModal = ({ setIsOpen }) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"enquiriesmodal"}>
          <Formik
            initialValues={{
              FirstName: "",
              LastName: "",
              Subject: "",
              Message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(enquiriesMessages) => {
              console.log(enquiriesMessages);
              async function postEnquiries() {
                let response = await axios.post(
                  `${BASE_URL}/enquiries`,
                  enquiriesMessages
                );
                alert(
                  "Enquirie is sent to the hotel, and will come back to you asap. Thank you."
                );
              }
              postEnquiries();
            }}
          >
            {({ errors, touched }) => (
              <Form className="createEnquiriesform">
                <h1 className="enquries_h1">Contact Hotel</h1>
                <h5 className="enquiries_title">FirstName</h5>
                <Field className="enquiries_input" name="FirstName" />
                {errors.FirstName && touched.FirstName ? (
                  <div>{errors.FirstName}</div>
                ) : null}
                <h5 className="enquiries_title">LastName</h5>
                <Field className="enquiries_input" name="LastName" />
                {errors.LastName && touched.LastName ? (
                  <div>{errors.LastName}</div>
                ) : null}
                <h5 className="enquiries_title">Subject</h5>
                <Field className="enquiries_input" name="Subject" />
                {errors.Subject && touched.Subject ? (
                  <div>{errors.Subject}</div>
                ) : null}
                <h5 className="enquiries_title">Message</h5>
                <Field
                  className="enquiries_input_msg"
                  component="textarea"
                  name="Message"
                />
                {errors.Message && touched.Message ? (
                  <div>{errors.Message}</div>
                ) : null}
                <div className="sendEnquiries_btn_wrapper">
                  <button className="sendEnquiries_btn" type="submit">
                    Submit message
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EnquiriesModal;
