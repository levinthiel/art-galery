import Link from "next/link";
import styled from "styled-components";

Link;

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link href={"/spotlight"}>Go to Spotlight</Link>
      <Link href={"/"}>Pieces</Link>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.div`
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  padding: 13px;
`;
