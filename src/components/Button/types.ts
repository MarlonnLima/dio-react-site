export interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   title: string;
   variant?: string;
   onClick?: () => void;
}

export interface IButtonStyled {
    variant: string;
}