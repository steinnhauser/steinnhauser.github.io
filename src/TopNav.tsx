import styled from "styled-components";

const TN = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;

  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 4vw;
  margin-left: 4vw;
`;

const ATag = styled.a`
  color: white;
  margin: 3vw;
  &:hover {
    color: white;
  }
  margin: 0;
`;

function TopNav() {
  return (
    <TN>
      <LinkContainer>
        <ATag href="/" style={{}}>
          <h3 style={{ margin: 0 }}>Home</h3>
        </ATag>
        <ATag href="/about" style={{}}>
          <h3 style={{ margin: 0 }}>About Me</h3>
        </ATag>
        {/* <ATag href="">
          <h3 style={{ margin: 0 }}>Contact Me</h3>
        </ATag> */}
      </LinkContainer>
    </TN>
  );
}

export default TopNav;
