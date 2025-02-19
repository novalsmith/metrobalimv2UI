export interface ButtonConfig {
  text: string;
  variant: string;
  color: string;
  size?: string;
  icon?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  elevation?: number;
  prependIcon?: string;
  appendIcon?: string;
  onClick?: () => void;
}
