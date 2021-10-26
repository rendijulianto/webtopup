interface AuthLabelProps {
  name: string;
  text: string;
}
export default function AuthLabel(props: AuthLabelProps) {
  const { name, text } = props;
  return (
    <label
      htmlFor={name}
      className="form-label text-lg fw-medium color-palette-1 mb-10"
    >
      {text}
    </label>
  );
}
