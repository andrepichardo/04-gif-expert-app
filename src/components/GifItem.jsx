export const GifItem = ({ title, url }) => {
  return (
    <div className="flex flex-col items-center">
      <li className="text-sm list-none">{title}</li>
      <div className="p-0.5 bg-white w-fit flex">
        <img src={url} alt={title} className="w-[300px] h-[300px]" />
      </div>
    </div>
  );
};
