type inputProps = {
  type: string;
  placeholder: string;
  className?: string;
};

const Input = (props: inputProps) => {
  return (
    <input
      className="bg-amber-300/10 rounded-md h-[40px] w-[300px] text-amber-50 placeholder:text-amber-50/50 placeholder:pl-2"
      {...props}
    />
  );
};

export default Input;
