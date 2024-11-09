import type { TextInput, TextInputProps } from "react-native"
import { Container } from "./styles"
import { useTheme } from "styled-components/native"
import type { RefObject } from "react"

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...props }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...props}
    />
  )
}