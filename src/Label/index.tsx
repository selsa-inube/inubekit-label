import { ILabelSize } from "./props";
import { ITextAppearance, Text } from "@inubekit/text";
import { tokens } from "./Tokens/tokens";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface ILabel {
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  htmlFor?: string;
  invalid?: boolean;
  margin?: string;
  padding?: string;
  size?: ILabelSize;
}

const Label = (props: ILabel) => {
  const {
    children,
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    margin = "0px",
    padding = "0px",
    size = "large",
  } = props;

  const theme = useContext(ThemeContext) as { label: typeof tokens };

  const getAppearance = (): ITextAppearance => {
    const { color } = theme?.label?.content || tokens.content;

    if (invalid) return color.invalid as unknown as ITextAppearance;
    if (focused) return color.focus as unknown as ITextAppearance;
    if (disabled) return color.disabled as unknown as ITextAppearance;
    return color.regular as unknown as ITextAppearance;
  };

  return (
    <label htmlFor={htmlFor}>
      <Text
        appearance={getAppearance()}
        margin={margin}
        padding={padding}
        size={size}
        type="label"
        weight="bold"
      >
        {children}
      </Text>
    </label>
  );
};

export { Label };
export type { ILabel };
