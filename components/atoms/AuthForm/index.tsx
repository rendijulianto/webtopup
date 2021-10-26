interface AuthFormProps {
  type: "email" | "text" | "number" | "password";
  id: string;
  name: string;
}
export default function AuthForm(props: AuthFormProps) {
  const { type, id, name } = props;
  return (
    <input
      type={type}
      className="form-control rounded-pill text-lg"
      id={id}
      name={name}
      aria-describedby={name}
      placeholder={`Enter your ${name}`}
    />
  );
}
