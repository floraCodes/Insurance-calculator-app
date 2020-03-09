import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import DetailedPrice from "./components/DetailedPrice";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [detailedPrice, setDetailedPrice] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  });
  const [loading, setLoading] = useState(false);
  const { quote, data } = detailedPrice;
  console.log(detailedPrice);
  return (
    <Container>
      <Header title="Insurance Calculator" />
      <FormContainer>
        <Form setDetailedPrice={setDetailedPrice} setLoading={setLoading} />
        {loading ? <Spinner /> : null}

        {!loading ? (
          <>
            <DetailedPrice data={data} />
            <Result quote={quote} />{" "}
          </>
        ) : null}
      </FormContainer>
    </Container>
  );
}

export default App;
