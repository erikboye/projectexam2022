import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

const EnquiriesModal = ({ setIsOpen, jwt }) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"enquiriesmodal"}>
          <h1 className="createnewhotel_title">Contact Hotel</h1>
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
                  `http://localhost:1337/enquiries`,
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
                <h5>FirstName</h5>
                <Field name="FirstName" />
                {errors.FirstName && touched.FirstName ? (
                  <div>{errors.FirstName}</div>
                ) : null}
                <h5>LastName</h5>
                <Field name="LastName" />
                {errors.LastName && touched.LastName ? (
                  <div>{errors.LastName}</div>
                ) : null}
                <h5>Subject</h5>
                <Field name="Subject" />
                {errors.Subject && touched.Subject ? (
                  <div>{errors.Subject}</div>
                ) : null}
                <h5>Message</h5>
                <Field name="Message" />
                {errors.Message && touched.Message ? (
                  <div>{errors.Message}</div>
                ) : null}
                <button className="sendEnquiries_btn" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EnquiriesModal;
