export const GifItem = ({ title, url }) => {
  return (
    <div className="flex flex-col items-center max-w-[450px] lg:max-w-[340px]  h-full rounded-lg bg-white text-black">
      <div className="flex p-0.5">
        <img
          src={url}
          alt={title}
          className="w-[450px] lg:w-[340px] h-[300px] rounded-t-lg"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-lg w-fit px-2.5 py-1 font-semibold capitalize text-center">
          {title}
        </p>
      </div>
    </div>
  );
};
