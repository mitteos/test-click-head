"use client";

import { Button } from "@/shared/UI/Button/Button";
import styles from "./ChangeForm.module.scss";
import { useState } from "react";
import { Input } from "@/shared/UI/Input/Input";
import { validatePositiveNumber } from "../../helpers/validatePositiveNumber";

interface ChangeFormProps {
  title: string;
  buttonText: string;
  onSubmit: (value: number) => void;
  placeholder?: string;
}

export const ChangeForm: React.FC<ChangeFormProps> = ({
  title,
  buttonText,
  onSubmit,
  placeholder,
}) => {
  const [value, setValue] = useState("");

  const handleInputChange = (val: string) => {
    const validValue = validatePositiveNumber(val);
    setValue(validValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(Number(value));
    setValue("");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <p className={styles.title}>{title}</p>
      <Input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        type="number"
      />
      <Button>{buttonText}</Button>
    </form>
  );
};
