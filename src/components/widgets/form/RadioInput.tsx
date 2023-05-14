import React from "react";

interface radioInputProps {
  value: string;
  label: string;
  handleChangeRating: (selectedRating: string) => void;
}
export const RadioInput = ({
  value,
  label,
  handleChangeRating,
}: radioInputProps) => {
  return (
    <label htmlFor={`radio-${label}`}>
      <input
        className="hidden peer"
        type="radio"
        id={`radio-${label}`}
        name="rating-radio-button"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeRating(e.target.value);
        }}
      />
      <span className="cursor-pointer hover:bg-primary-orange hover:text-white peer-checked:bg-neutral-medium-gray peer-checked:text-white px-[1.4rem] py-4 place-content-center text-neutral-light-gray bg-neutral-dark-blue rounded-full">
        {label}
      </span>
    </label>
  );
};
