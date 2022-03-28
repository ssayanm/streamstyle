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
      key: "id",
    },
    {
      title: "for DTC",
      dataIndex: "dtc",
      key: "id",
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
      key: "id",
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
      key: "id",
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

  border-radius: 1rem;
  font-size: 0.75rem;
  /* margin: 0 auto; */
  background-color: var(--clr-white);

  @media (min-width: 992px) {
    width: 70vw;
    font-size: 1.2rem;
    padding: 2rem;
    margin: 0 auto;
  }
`;
export default Price;
