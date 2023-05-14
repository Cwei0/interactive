import { useState } from "react";
import { RatingViews, ThanksView } from ".";

export const RatingCard = () => {
  const [rating, setRating] = useState<string>("0");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChangeRating = (selectedRating: string) => {
    setRating(selectedRating);
  };

  const handleFinishRating = () => {
    setSubmitted(true);
  };
  return (
    <section className="bg-gradient-to-b from-[#212832] to-[#171e28] text-neutral-light-gray rounded-2xl py-7 px-9 md:w-[400px] sm:w-96 mx-4 grid gap-4 place-items-center">
      {submitted ? (
        <ThanksView selectedUserRating={rating} />
      ) : (
        <RatingViews rating={rating} onChangeRating={handleChangeRating} onFinishRating={handleFinishRating} />
      )}
    </section>
  );
};
