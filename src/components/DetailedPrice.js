import React from "react";
import styled from "@emotion/styled";
import { capitalize } from "../helper";
import PropTypes from "prop-types";

const DetailetPriceContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const DetailedPrice = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <DetailetPriceContainer>
      <h2>Detailed Price</h2>
      <ul>
        <li>Brand: {capitalize(brand)}</li>
        <li>Year: {year}</li>
        <li>Plan: {capitalize(plan)}</li>
      </ul>
    </DetailetPriceContainer>
  );
};

DetailedPrice.propTypes = {
  data: PropTypes.object.isRequired
};

export default DetailedPrice;
