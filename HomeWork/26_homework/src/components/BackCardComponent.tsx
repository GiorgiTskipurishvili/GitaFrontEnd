type Props = {
  cardData: {
    cvc: string;
  };
};

export default function BackCardComponent({ cardData }: Props) {
  return (
    <div className="w-71.25 pt-3.5 rounded-md bg-linear-to-r from-[#D2D3D9] to-[#D2D3D9] h-40">

      <div className="h-8.5 bg-[#2F2F2F]"></div>

      <div className="bg-[#ADB5BE] ml-7 mr-6.5 mt-3.75 h-7.5 flex items-center justify-end pr-2.5">
        <p className="text-[12px] text-[#21092F] font-medium tracking-[1px]">
          {cardData.cvc || "000"}
        </p>
      </div>

    </div>
  );
}