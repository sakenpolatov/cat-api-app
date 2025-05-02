import { FC, InputHTMLAttributes } from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
};
