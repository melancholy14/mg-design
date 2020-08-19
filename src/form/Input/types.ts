import { STYLES } from '../../common/styles';
import { SIZE } from '../../common/sizes';

export type StyledInputProps = {
  /** sets the border color depending on the type */
  inputStyle?: keyof typeof STYLES;
  /** makes the input look rounded */
  rounded?: boolean;
  /** adjusts the size of the input, used `extent` to avoid conflicting to the default `size` tag */
  extent?: keyof typeof SIZE;
  /** makes the input have a full width */
  full?: boolean;
  /** makes the text bolder */
  bold?: boolean;
  /** decides where the icon is */
  icon?: 'left' | 'right';
  children?: React.ReactNode;
};

export type WrapperProps = {
  /** sets the location of the label */
  labelLocation?: 'up' | 'left';
};

export type InputProps = StyledInputProps &
  WrapperProps & {
    /** makes the button inactive */
    disabled?: boolean;
    value?: string | number;
    placeholder?: string;
    id?: string;
    /** the label text for the input tag */
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
