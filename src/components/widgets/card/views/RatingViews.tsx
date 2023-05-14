import { RadioInput } from "../..";
import iconstar from "../../../../images/icon-star.svg";
interface ratingViewProps {
  rating: string;
  onChangeRating: (selectedRating: string) => void;
  onFinishRating: () => void;
}
export const RatingViews = ({
  rating,
  onChangeRating,
  onFinishRating,
}: ratingViewProps) => {
  const ratings: string[] = ["1", "2", "3", "4", "5"];
  return (
    <div>
      <span className="w-full">
        <img
          className="bg-neutral-dark-blue p-4 rounded-full"
          src={iconstar}
          alt="iconstar"
        />
      </span>
      <div>
        <h2 className="text-white text-[1.875rem]">How did we do?</h2>
        <p className="text-[0.975rem] text-neutral-light-gray">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onFinishRating();
        }}
        className="flex flex-col gap-10 mt-5 w-full"
      >
        <div className="flex flex-1 justify-between">
          {ratings.map((ratingValue, i) => {
            return (
              <RadioInput
                key={i}
                value={ratingValue}
                label={ratingValue}
                handleChangeRating={onChangeRating}
              />
            );
          })}
        </div>
        <button
          className=" disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:text-gray-400 flex-1 w-full cursor-pointer p-3 bg-primary-orange text-white rounded-full tracking-wider hover:bg-white hover:text-primary-orange"
          type="submit"
          disabled={rating === "0"}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
