type Props = {
  cardData: {
    cardholderName: string;
    cardNumber: string;
    expMonth: string;
    expYear: string;
  };
};

export default function FrontCardComponent({ cardData }: Props) {
  return (
    <div className="w-71.25 pt-4.25 pl-4.75 pr-4.75 pb-4.75 rounded-md bg-linear-to-r from-[#6348FE] to-[#610595] h-40">
      <div className="flex gap-2.5 items-center mb-9.25">
        <div className="w-7.5 h-7.5 bg-white rounded-full"></div>

        <div className="w-[13.5px] h-[13.5px] border-2 border-white rounded-full"></div>
      </div>

      <div className="mb-4.25">
        <p className="text-white font-medium tracking-[4px]">
          {cardData.cardNumber || "0000 0000 0000 0000"}
        </p>
      </div>

      <div className="flex justify-between text-white uppercase">
        <p className="text-[12px] font-medium tracking-[1px]">
          {cardData.cardholderName || "JANE APPLESEED"}
        </p>

        <p className="text-[12px] font-medium">
          {cardData.expMonth || "00"}/{cardData.expYear || "00"}
        </p>
      </div>
    </div>
  );
}
