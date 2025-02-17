import React, { useRef } from "react";
export default function OtpInput() {
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRef.current.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key == "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <form className="form-code-verify">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRef.current[index] = el)}
          type="text"
          maxLength={1}
          onChange={(e) => handleInput(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
      <a href="#">Verificar Email</a>
    </form>
  );
}
