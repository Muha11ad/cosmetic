import { ForwardedRef, forwardRef, ForwardRefExoticComponent } from "react";
import {
  TextInput as GravityTextInput,
  TextInputProps as GravityTextInputProps,
} from "@gravity-ui/uikit";

export interface TextInputProps extends GravityTextInputProps {}

export const TextInput: ForwardRefExoticComponent<TextInputProps> = forwardRef<
  HTMLElement,
  TextInputProps
>((props: TextInputProps, ref: ForwardedRef<HTMLElement>) => {
  return <GravityTextInput {...props} ref={ref} />;
});
