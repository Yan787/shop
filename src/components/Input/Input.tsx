//  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
// if (event.key === "Enter") {
//   onClickSearchButton();
// }
//   };
import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  onKeyDown?: (value: KeyboardEvent<HTMLInputElement>) => void;
};
const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  onKeyDown,
}) => {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <img className={styles.icon} src="/img/search.svg" alt="search" />
      <input
        className={styles.input}
        value={value}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onChange={onChangeText}
        type={type}
      />
    </div>
  );
};
export default Input;
