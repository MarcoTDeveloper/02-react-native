import type { TouchableOpacityProps } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Container, Icon, type ButtonIconTypeStyleProps } from "./styles"

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, variant = "PRIMARY", ...props }: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon
        name={icon}
        type={variant}
      />
    </Container>
  )
}