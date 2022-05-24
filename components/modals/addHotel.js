import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../config/configs";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Must be a number!"),
  adress: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  location: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageurl: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
});

const AddHotelModal = ({ setIsOpen, jwt }) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"hotelmodal"}>
          <h1 className="createnewhotel_title">CREATE NEW HOTEL</h1>
          <Formik
            initialValues={{
              title: "",
              price: "",
              description: "",
              location: "",
              infoabout: "",
              adress: "",
              imageurl: "",
              rating: "",
              map: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(newHotel) => {
              async function postdata() {
                let response = await axios.post(
                  `${BASE_URL}/hotels`,
                  newHotel,
                  {
                    headers: {
                      Authorization: `Bearer ${jwt}`,
                    },
                  }
                );
                alert("Success! Please refresh the browser.");
              }
              postdata();
            }}
          >
            {({ errors, touched }) => (
              <Form className="createform">
                <h5 className="addHotel_title">Title</h5>
                <Field className="addHotel_input" name="title" />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
                <h5>Price</h5>
                <Field className="addHotel_input" name="price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <h5>Location</h5>
                <Field className="addHotel_input" name="location" />
                {errors.location && touched.location ? (
                  <div>{errors.location}</div>
                ) : null}
                <h5>Adress</h5>
                <Field className="addHotel_input" name="adress" />
                {errors.adress && touched.adress ? (
                  <div>{errors.adress}</div>
                ) : null}
                <h5>ImageURL</h5>
                <Field className="addHotel_input" name="imageurl" />
                {errors.imageurl && touched.imageurl ? (
                  <div>{errors.imageurl}</div>
                ) : null}
                <button className="createhotel_btn" type="submit">
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

export default AddHotelModal;
