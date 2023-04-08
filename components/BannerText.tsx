interface Props {
  title: string;
  description: string;
  btnText: string;
  className: string;
}

function BannerText({ title, description, btnText, className }: Props) {
  return (
    <div className={className}>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-sm leading-5">{description}</p>
      <button className="bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border border-gray-400">
        {btnText}
      </button>
    </div>
  );
}

export default BannerText;
