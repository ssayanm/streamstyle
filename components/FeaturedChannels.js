import styled from "styled-components";
import Image from "next/image";
import { Card } from "antd";

const FeaturedChannels = ({ channel }) => {
  return (
    <Wrapper>
      <Card className="channels">
        <Image
          alt="Revo"
          src={channel.image}
          width={400}
          height={500}
          objectFit="cover"
        />
      </Card>
    </Wrapper>
  );
};

export default FeaturedChannels;

const Wrapper = styled.section`
  padding: 2rem 0rem;

  .gutter-box {
    padding: 0.75rem 0.1rem;
  }
`;
