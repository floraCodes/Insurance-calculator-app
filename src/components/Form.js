import React, { useState } from "react";
import styled from "@emotion/styled";
import { getYearDifference, calculateBrand, getPlan } from "../helper";
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setDetailedPrice, setLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: ""
  });

  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (brand.trim() === "" || brand.trim() === "" || brand.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Base price of insurance
    let result = 2000;

    // Get the year difference
    const difference = getYearDifference(year);

    // 3% less for every year difference
    result -= (difference * 3 * result) / 100;

    // European +30% - American +15% - Asian +5%
    result = calculateBrand(brand) * result;

    // Basic +20% - Full +50%
    const planIncrement = getPlan(plan);
    result = parseFloat(planIncrement * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      // eliminate spinner
      setLoading(false);

      // show result
      setDetailedPrice({
        quote: Number(result),
        data
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>You must complete all fields</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option value="">--Select One--</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">--Select One--</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={handleChange}
        />
        Full
      </Field>
      <Button type="submit">Estimate</Button>
    </form>
  );
};

Form.propTypes = {
  setDetailedPrice: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

export default Form;
