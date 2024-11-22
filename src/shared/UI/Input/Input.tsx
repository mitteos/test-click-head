import styles from "./Input.module.scss";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};
