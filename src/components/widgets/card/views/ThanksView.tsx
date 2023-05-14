import illustrator from "../../../../images/illustration-thank-you.svg";

interface thanksViewProps {
  selectedUserRating: string;
}
export const ThanksView = ({ selectedUserRating }: thanksViewProps) => {
  return (
    <>
      <img src={illustrator} alt="Rating sent illustrator" />
      <p className="bg-neutral-dark-blue text-primary-orange rounded-full w-56 p-2 text-center">
        You selected {selectedUserRating} out of 5
      </p>
      <div>
        <h2 className="text-white text-[1.875rem] text-center">Thank You!</h2>
        <p className="text-[0.975rem] text-neutral-light-gray mt-2 text-center">
          We appreciate you taking the time to give a rating. If you ever need support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};
