type Props = {
  text: string;
};

function Button({ text }: Props) {
  return <button className="w-20 h-7 my-2 text-sm font-semibold rounded-full bg-blue text-white hover:bg-[#004f9a] duration-300">{text}</button>;
}

export default Button;
