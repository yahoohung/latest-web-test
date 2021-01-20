import styled from 'styled-components';
import Link from 'next/link'

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const Links = ({ path = "" }) => {
  return (
    <StyledBox>
      <StyledLink href={`/${path ? `${`zh-hk/${path}`}` : ""}`} locale={false}>
        <a>To {`${path ?? /zh-hk/}`}</a>
      </StyledLink>
      <StyledLink href={`/${path}`} locale="zh-cn">
        <a>To {`/zh-cn/${path}`}</a>
      </StyledLink>
      <StyledLink href={`/${path}`} locale="en">
        <a>To {`/en/${path}`}</a>
      </StyledLink>
    </StyledBox>
  )
}

export default Links;
