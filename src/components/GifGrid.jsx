import { FaSpinner } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex gap-2">
        <span className="text-xl font-semibold">Showing results for:</span>
        <div className="flex gap-[1px]">
          <h1 className="text-xl font-bold underline underline-offset-2 text-emerald-400">
            {category}
          </h1>
          <span className="text-xl">.</span>
        </div>
      </div>

      {isLoading && (
        <div className=" self-center h-80 flex items-center">
          <FaSpinner className="animate-spin w-20 h-20" />
        </div>
      )}

      {(images.length === 0) & !isLoading ? (
        <div className="flex flex-col gap-6 h-96 text-center items-center justify-center text-3xl">
          <div className="">
            <TbMoodSad className=" w-40 h-40 text-white" />
          </div>
          <div>
            There are no results for{" "}
            <span className="underline underline-offset-2 text-emerald-400 font-bold">{`${category}`}</span>{" "}
            at this moment... Try Again!
          </div>
        </div>
      ) : null}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 mb-10">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
