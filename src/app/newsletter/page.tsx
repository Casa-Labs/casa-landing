import NewsLetterForm from "@/components/features/NewsLetterForm";

const NewsLetter = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-11/12 flex-col gap-8 py-20 sm:w-1/3">
        <span className="text-6xl font-semibold">
          Join the Vibe, Join the Life of CASA.
        </span>
        <span>Get the exclusive offers and products. Join our newsletter.</span>
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default NewsLetter;
