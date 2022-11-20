import { Logo, StyledHeader } from "./Header.styles";
import logo from "../../assets/Logo.png";

export function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} />
    </StyledHeader>
  );
}
