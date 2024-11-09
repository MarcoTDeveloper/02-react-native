import type { TouchableOpacityProps } from "react-native";
import { Container, Title, type ButtonTypeStyleProps } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: ButtonTypeStyleProps
}

export function Button({ title, variant = 'PRIMARY', ...props }: ButtonProps) {
  return (
    <Container type={variant} {...props}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}