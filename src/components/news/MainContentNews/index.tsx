import { ReactChild } from "react";
import { Container } from "./styles";

export default function MainContentNews({ children }: {
  children: ReactChild
}) {
  return (
    <Container>
      {children}
    </Container>);
}
