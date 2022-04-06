import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { Col, Collapse, Row, Table } from "antd";
import { GoPrimitiveDot } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { featuresPrice } from "../utils/constants";
import { GoDash } from "react-icons/go";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const PriCing = () => {
  const columnsfordtc = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },
    {
      title: "for DTC",
      dataIndex: "dtc",
      key: "dtc",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.dtc === "boolean" ? (
            record.dtc ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.dtc
          )}
        </div>
      ),
    },
  ];

  const columnsforbrands = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },

    {
      title: "for Brands",
      dataIndex: "brands",
      key: "brands",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.brands === "boolean" ? (
            record.brands ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.brands
          )}
        </div>
      ),
    },
  ];

  const columnsforenterprise = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "65%",
    },

    {
      title: "for Enterprise",
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text, record) => (
        <div key={record.id} className="text-center">
          {typeof record.enterprise === "boolean" ? (
            record.enterprise ? (
              <GoPrimitiveDot className="greendot" />
            ) : (
              <GrClose />
            )
          ) : (
            record.enterprise
          )}
        </div>
      ),
    },
  ];

  return (
    <Wrapper>
      <h1 className="title text-center ">Princing & Plans</h1>
      <div className="section-center space1">
        <Row gutter={[32, 32]} justify="center" align="middle">
          <Col sm={24} md={12} lg={8}>
            <div className="box">
              <h5>Revo for</h5>
              <h3>DTC</h3>
              <p>
                Any DTC brand on e-commerce platforms.
                <br /> Download the app and go live
              </p>
              <ul>
                <li>5% of gross sales generated on the platform. </li>
                <li>No monthly fee</li>
                <li> No code environment</li>
                <li>No obligation</li>
              </ul>

              <Link href="/">
                <a className="btn-alt">Talk to Sales</a>
              </Link>
              <Collapse
                defaultActiveKey={["10"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="10">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsfordtc}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <div className="box boxmiddle">
              <h5>Revo for</h5>
              <h3>Brands White Label</h3>
              <p>For brands that want to customize the consumer experience.</p>
              <ul>
                <li>5% of gross sales generated on the platform</li>
                <li> Volume discounts </li>
                <li>No code environment</li>
              </ul>

              <Link href="/">
                <a className="btn-alt">Talk to Sales</a>
              </Link>

              <Collapse
                defaultActiveKey={["12"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="12">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsforbrands}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
          <Col sm={24} md={12} lg={8}>
            <div className="box">
              <h5>Revo for</h5>
              <h3>Enterprise SaaS</h3>
              <p>
                For large companies who want to fully customize and even extend
                the Revo platform within their ecosystem
              </p>

              <span className="btnn">
                <Link href="/">
                  <a className="btn-alt">Talk to Sales</a>
                </Link>
              </span>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={callback}
                bordered={false}
                expandIcon={({ isActive }) => (
                  <GoDash rotate={isActive ? 90 : 0} />
                )}
                className="site-collapse-custom-collapse onlymobile"
              >
                <Panel header="Hide plan features" key="1">
                  <Table
                    dataSource={featuresPrice}
                    columns={columnsforenterprise}
                    pagination={false}
                    className="onlymobile"
                  />
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em 1rem;
  font-family: "Mont";
  text-align: center;

  .title {
    text-align: center;
  }

  .site-collapse-custom-collapse {
    margin-top: 1rem;
    color: var(--clr-black);
  }

  .ant-table-thead > tr > th {
    font-family: "MontBold";
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    color: var(--clr-primary-1);
    font-family: "MontBold";
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .featuretitle {
    p {
      text-align: left;
      color: var(--clr-black);
    }
  }

  .ant-table-thead > tr > th {
    :not(:first-child) {
      text-align: center;
    }
  }

  .box {
    box-shadow: var(--dark-shadow);
    padding: 2rem 0.75rem;
    border-radius: 1rem;

    margin-bottom: 2rem;
    background-color: var(--clr-white);

    h5 {
      font-size: 1.25rem;
      font-family: "MontSemiBold";
    }
    h3 {
      font-size: 1.75rem;
      font-family: "MontSemiBold";
    }

    ul {
      margin: 0 auto;
      width: 15rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    li {
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    padding: 5rem 2rem;

    .box {
      box-shadow: var(--dark-shadow);
      padding: 3rem 2rem;
      height: 30rem;
      background-color: var(--clr-white);
      position: relative;

      h5 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 2.75rem;
      }

      p {
        /* font-size: 1.25rem; */
        color: var(--clr-light);
      }

      ul {
        margin: 0 auto;
        width: 15rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      li {
        text-align: left;
      }
      .btnn {
        position: absolute;
        right: 0;
        bottom: 3rem;
        left: 0;
      }
    }

    .boxmiddle {
      height: 33rem;
    }

    .title {
      text-align: center;
    }
  }
`;

export default PriCing;
