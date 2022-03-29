import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";

import { GrClose } from "react-icons/gr";
import { featuresPrice } from "../utils/constants";
import { Table } from "antd";

const Price = () => {
  const columnsfordesktop = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: "40%",
    },
    {
      title: "for DTC",
      dataIndex: "dtc",
      key: "dtc",
      render: (text, record) => (
        <div>
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
    {
      title: "for Brands",
      dataIndex: "brands",
      key: "brands",
      render: (text, record) => (
        <div>
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
    {
      title: "for Enterprise",
      dataIndex: "enterprise",
      key: "enterprise",
      render: (text, record) => (
        <div>
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
      <Table
        dataSource={featuresPrice}
        columns={columnsfordesktop}
        pagination={false}
        className="onlydesktop"
        id={1}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  box-shadow: var(--dark-shadow);
  width: 90vw;
  border-radius: 1rem;
  font-size: 0.75rem;
  /* margin: 0 auto; */
  background-color: var(--clr-white);
  font-family: "Mont";

  @media (min-width: 992px) {
    width: 60vw;
    font-size: 1.2rem;
    padding: 2rem;
    margin: 0 auto;
    margin-bottom: 7rem;

    .ant-table-thead > tr > th {
      font-family: "MontBold";
      font-size: 1.1rem;
    }
  }
`;
export default Price;
