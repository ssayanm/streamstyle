import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const HubspotContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "25472727",
          formId: "2e48dd4d-3794-438e-8ee3-5f7a00abf1dc",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return (
    <Wrapper>
      <Row gutter={16} justify="center">
        <Col>
          <div className="content">
            <h1 className="title">Get in touch</h1>
          </div>
          <div id="hubspotForm"></div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;

  .title {
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 4rem 4rem 0 4rem;

    .content {
      width: 60rem;
    }
  }
`;

export default HubspotContactForm;
