import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import { Flex } from "../Viewbusiness/style";
import { Link } from "react-router-dom";
import right from "../../assets/chevron_right.png";
import ArrowRight from "../../assets/icons/ArrowRight";
import { FormBody, FormGrid } from "./style";
import { Formik, Form } from "formik";
import { getCountries, getStates } from "country-state-picker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddBusiness = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [st, setSt] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleCountry = (e) => {
    let data = JSON.parse(e.target.value);
    setCountry(data.name);
    setSt(data.code);
  };

  useEffect(() => {
    let country = getCountries();
    setCountries(country);
  }, []);

  useEffect(() => {
    let states = getStates(st);
    setStates(states);
  }, [st]);

  const handleSubmit = (doc) => {
    const data = {
      ...doc,
      country: country,
      phone: phone.phone,
    };
    console.log(data);
  };

  let data = {
    first_name: "",
    last_name: "",
    email: "",
    business_name: "",
    business_address: "",
    state: "",
    city: "",
  };

  return (
    <Layout>
      <div style={{ paddingBottom: "200px" }}>
        <Flex>
          <div className="flow">
            <div className="right">
              <ArrowRight />
            </div>
            <Link to="/businesses" className="link">
              Businesses
            </Link>
          </div>

          <img src={right} alt="right_arrow" className="arrow" />
          <h1>Add Business</h1>
        </Flex>

        <FormBody>
          <Formik initialValues={data} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <div>
                  <FormGrid>
                    <div className="form_content">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form_content">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </FormGrid>
                  <div className="form_content">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form_content" style={{ marginTop: "16px" }}>
                    <label>Phone Number</label>
                    <PhoneInput
                      country={"ng"}
                      buttonStyle={{ background: "none" }}
                      inputStyle={{
                        width: "100%",
                        border: "1px solid #D9D8DA",
                      }}
                      style={{ width: "auto" }}
                      onChange={(phone) => setPhone({ phone })}
                    />
                  </div>

                  <div className="form_content" style={{ marginTop: "16px" }}>
                    <label>Business Name</label>
                    <input
                      type="text"
                      placeholder="Business Name"
                      name="business_name"
                      value={values.business_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form_content" style={{ marginTop: "16px" }}>
                    <label>Business Address</label>
                    <input
                      type="text"
                      placeholder="Business Address"
                      name="business_address"
                      value={values.business_address}
                      onChange={handleChange}
                    />
                  </div>

                  <FormGrid style={{ marginTop: "16px" }}>
                    <div className="form_content">
                      <label>City </label>
                      <input
                        type="text"
                        placeholder="City "
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form_content">
                      <label>Country </label>
                      <select onChange={handleCountry}>
                        <option disbaled={true} selected>
                          --Select Country--
                        </option>
                        {countries.map((data) => (
                          <option key={data.code} value={JSON.stringify(data)}>
                            {data.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </FormGrid>

                  <div className="form_content" style={{ marginTop: "16px" }}>
                    <label>State</label>
                    <select name="state" onChange={handleChange}>
                      <option disbaled={true} selected>
                        --Select State--
                      </option>
                      {states?.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit">Add Business</button>
                </div>
              </Form>
            )}
          </Formik>
        </FormBody>
      </div>
    </Layout>
  );
};

export default AddBusiness;
