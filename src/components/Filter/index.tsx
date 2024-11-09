import { type TouchableOpacityProps } from "react-native";
import { Container, Title, type FilterStyleProps } from "./styles";

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function Filter({ title, isActive, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}