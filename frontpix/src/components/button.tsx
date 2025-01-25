interface ButtonProps {
  text: string;
  classe: string;
}
function Button({ text, classe }: ButtonProps): JSX.Element {
  return <a className={classe}> {text}</a>;
}

export default Button;
