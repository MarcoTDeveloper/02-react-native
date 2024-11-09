import { Container, SubTittle, Tittle } from "./styles"

type HighlightProps = {
  title: string
  subTitile: string
}

export function Highlight({ title, subTitile }: HighlightProps) {
  return (
    <Container>
      <Tittle>{title}</Tittle>
      <SubTittle>{subTitile}</SubTittle>
    </Container>
  )
}