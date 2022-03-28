import { FaPlay } from "react-icons/fa";
import styled from "styled-components";

const GreenBox = ({ channel }) => {
  const { title } = channel;
  return (
    <Wrapper>
      <div className="greenbox">
        <h1 className="title">{title}</h1>
        <FaPlay />
      </div>
    </Wrapper>
  );
};

export default GreenBox;

const Wrapper = styled.section`
  /* padding: 2rem; */
  .container {
    /* padding: 3rem 2rem; */
  }

  .section {
    padding: 2rem;
  }

  .icon {
    width: 64px;
    height: 64px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .greenbox {
    background: var(--clr-primary-1);
    border: solid 1px #000;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 1rem 0rem 1rem;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }

  .greenbar {
    background: var(--clr-primary-1);
    /* box-shadow: 0 0 39.1px 3.9px rgba(0, 0, 0, 0.1); */
    padding: 1.5rem 1rem 0 1rem;
    /* grid-template-columns: 2fr 1fr; */
    display: grid;
    border-radius: 2.5rem;
    height: 45rem;
  }

  .title {
    text-transform: none;
  }

  @media (min-width: 992px) {
    .container {
      /* height: calc(90vh - 3rem); */
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .greenbar {
      background: var(--clr-primary-1);

      padding: 4rem;
      grid-template-columns: 2fr 1fr;
      display: grid;
      border-radius: 2.5rem;
      height: 30rem;
    }

    .greenbox {
      width: max-content;

      /* height: 20rem; */
    }
  }
`;
