type Props = {
  isOn: boolean;
  onClick: () => void;
};

export default function Switch({ isOn, onClick }: Props) {
  return <div
    role="button"
    onClick={onClick}
    className={`border-box w-[35px] h-5 rounded-2xl flex items-center hiddedn border border-[#E8EAEE] p-[1px] transition-all duration-300 ${isOn ? "justify-start bg-secondary" : "justify-end bg-[#E0E0E0]"}`}>
    <div className="size-[17.14px] bg-white rounded-full" />
  </div>
}
