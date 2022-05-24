import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import Modal from "../modals/modal";
import { BASE_URL } from "../../config/configs";
import { DateRangePicker } from "@mantine/dates";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Email: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  Cardnumber: Yup.string()
    .min(1, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
});

function CheckoutForm({ setCheckoutModalIsOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];
  return (
    <>
      <div className="darkBG" onClick={() => setCheckoutModalIsOpen(false)} />
      <div className="centered">
        <div className="checkout">
          <div className="checkout_leftside">
            <h2 className="checkout_leftside_heading">
              Upgrade to All-Inclusive!
            </h2>
            <div className="checkout_leftside_miniheading_div">
              <p className="checkout_leftside_features">
                Unlock many features, free food, fun activities, with all
                inclusive!
              </p>
            </div>
            <div className="checkout_leftside_79aday">
              <span className="checkout_leftside_79">$79</span>
              <span className="checkout_leftside_aday">/a day</span>
            </div>
            <div className="checkout_leftside_discountwrapper">
              <span className="checkout_leftside_15percent">15% discount</span>
              <span className="checkout_leftside_discount_compared">
                compared to the monthly plan
              </span>
              <div className="checkout_leftside_upgradediv">
                <span className="checkout_leftside_upgrade">UPGRADE NOW!</span>
              </div>
            </div>
          </div>

          <div className="checkout_rightside">
            <div>
              <DateRangePicker
                className="checkout_datepicker"
                placeholder="Pick a date"
                value={value}
                onChange={setValue}
              />
            </div>
            <div className="leading-loose">
              <Formik
                initialValues={{
                  Name: "",
                  Email: "",
                  Cardnumber: "",
                  Expiration: "",
                  Cvc: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(messageToPrimaVera) => {
                  setIsOpen(true);
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
                  <Form>
                    <div className="checkout_rightside_form">
                      <h5 className="checkout_title">Name</h5>
                      <Field className="checkout_rightside_input" name="Name" />
                      {errors.Name && touched.Name ? (
                        <div>{errors.Name}</div>
                      ) : null}
                      <h5 className="checkout_title">Email</h5>
                      <Field
                        className="checkout_rightside_input"
                        name="Email"
                      />
                      {errors.Email && touched.Email ? (
                        <div>{errors.Email}</div>
                      ) : null}

                      <h5 className="checkout_title">Cardnumber</h5>
                      <Field
                        className="checkout_rightside_input"
                        name="Cardnumber"
                        type="Cardnumber"
                      />
                      {errors.Cardnumber && touched.Cardnumber ? (
                        <div>{errors.Cardnumber}</div>
                      ) : null}
                      <div className="checkout_bottom">
                        <h5 className="checkout_title"></h5>
                        <Field
                          className="checkout_rightside_expiration"
                          name="Expiration"
                          type="text"
                          placeholder="Experation date"
                        />
                        {errors.Expiration && touched.Expiration ? (
                          <div>{errors.Expiration}</div>
                        ) : null}
                        <h5 className="checkout_title"></h5>
                        <Field
                          className="checkout_rightside_year"
                          name="cvc"
                          type="cvc"
                          placeholder="CVC"
                        />
                        {errors.Cardnumber && touched.Cardnumber ? (
                          <div>{errors.Cvc}</div>
                        ) : null}
                      </div>
                    </div>
                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                  </Form>
                )}
              </Formik>
              <div className="paynow_wrapper">
                <button className="paynow_btn" onClick={() => setIsOpen(true)}>
                  Complete payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
