interface ChipProps {
  text: string;
}
const Chip = ({ text }: ChipProps) => {
  return (
    <div className="text-sm text-brand border border-brand p-2 rounded-md">
      {text}
    </div>
  );
};

export default Chip;
