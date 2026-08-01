import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

type FormData = {
  cardholderName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
};

type Props = {
  cardData: FormData;
  setCardData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function CardInputFieldComponent({ setCardData }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // ფორმის წარმატებით შევსებისას
  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContinue = () => {
    reset();
    setCardData({
      cardholderName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    }); 
    setIsSubmitted(false);
  };

  return (
    <div className="w-[79%] m-auto flex justify-center">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center w-81.75 py-10">
          <div className="w-20 h-20 bg-linear-to-b from-[#6348FE] to-[#6105E0] rounded-full flex items-center justify-center mb-9 shadow-lg">
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.35714L10.0833 16L26 2"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-[#21092F] text-[28px] font-medium tracking-[3.4px] uppercase mb-4">
            Thank you!
          </h1>
          <p className="text-[#8F8694] text-[18px] font-medium mb-12">
            We’ve added your card details
          </p>

          <button
            onClick={handleContinue}
            className="w-full bg-[#21092F] hover:bg-[#3a1352] text-white font-medium p-3.75 rounded-lg transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col gap-5 w-81.75"
          onSubmit={handleSubmit(onSubmit)}
        >
            {/* CARDHOLDER NAME */}
          <div>
            <p className="text-[#21092F] font-medium text-[12px] uppercase mb-2.25">
              Cardholder Name
            </p>

            <input
              className={`text-[18px] w-full p-[11px_16px] rounded-lg border outline-none ${
                errors.cardholderName ? "border-[#EF4444]" : "border-[#D1D5DB] focus:border-[#6348FE]"
              }`}
              type="text"
              placeholder="e.g. Jane Appleseed"
              {...register("cardholderName", {
                required: "Can't be blank",
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Wrong format, letters only",
                },
              })}
              name="cardholderName"
              onChange={handleChange}
            />

            {errors.cardholderName && (
              <p className="text-[#EF4444] text-[12px] mt-1">
                {errors.cardholderName.message}
              </p>
            )}
          </div>

          {/* CARD NUMBER */}
          <div>
            <p className="text-[#21092F] font-medium text-[12px] uppercase mb-2.25">
              Card Number
            </p>

            <Controller
              name="cardNumber"
              control={control}
              rules={{
                required: "Can't be blank",
                validate: (value) => {
                  if (!value) return "Can't be blank";
                  const numbersOnly = value.replace(/\s/g, "");

                  if (!/^[0-9]+$/.test(numbersOnly)) {
                    return "Wrong format, numbers only";
                  }

                  if (numbersOnly.length !== 16) {
                    return "Card number must be 16 digits";
                  }

                  return true;
                },
              }}
              render={({ field }) => (
                <IMaskInput
                  mask="**** **** **** ****"
                  value={field.value || ""}
                  onAccept={(value) => {
                    field.onChange(value);
                    setCardData((prev) => ({
                      ...prev,
                      cardNumber: value,
                    }));
                  }}
                  placeholder="e.g. 1234 5678 9123 0000"
                  className={`text-[18px] w-full p-[11px_16px] rounded-lg border outline-none ${
                    errors.cardNumber ? "border-[#EF4444]" : "border-[#D1D5DB] focus:border-[#6348FE]"
                  }`}
                />
              )}
            />

            {errors.cardNumber && (
              <p className="text-[#EF4444] text-[12px] mt-1">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          {/* DATE + CVC */}
          <div className="flex gap-2.75">
            {/* MONTH YEAR */}
            <div className="flex flex-col w-38">
              <p className="text-[#21092F] font-medium text-[12px] uppercase mb-2.25">
                Exp. Date (MM/YY)
              </p>

              <div className="flex gap-2">
                <input
                  className={`text-[18px] rounded-lg p-[11px_16px] w-18 border outline-none ${
                    errors.expMonth ? "border-[#EF4444]" : "border-[#D1D5DB] focus:border-[#6348FE]"
                  }`}
                  placeholder="MM"
                  maxLength={2}
                  inputMode="numeric"
                  {...register("expMonth", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Numbers only",
                    },
                    validate: (value) =>
                      (Number(value) >= 1 && Number(value) <= 12) ||
                      "Invalid month",
                  })}
                  name="expMonth"
                  onChange={handleChange}
                />

                <input
                  className={`text-[18px] rounded-lg p-[11px_16px] w-18 border outline-none ${
                    errors.expYear ? "border-[#EF4444]" : "border-[#D1D5DB] focus:border-[#6348FE]"
                  }`}
                  placeholder="YY"
                  maxLength={2}
                  inputMode="numeric"
                  {...register("expYear", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Numbers only",
                    },
                    minLength: {
                      value: 2,
                      message: "Must be 2 digits",
                    },
                  })}
                  name="expYear"
                  onChange={handleChange}
                />
              </div>

              {(errors.expMonth || errors.expYear) && (
                <p className="text-[#EF4444] text-[12px] mt-1">
                  {errors.expMonth?.message || errors.expYear?.message}
                </p>
              )}
            </div>

            {/* CVC */}
            <div className="flex flex-col w-41">
              <p className="text-[#21092F] font-medium text-[12px] uppercase mb-2.25">
                CVC
              </p>

              <input
                className={`text-[18px] rounded-lg p-[11px_16px] w-full border outline-none ${
                  errors.cvc ? "border-[#EF4444]" : "border-[#D1D5DB] focus:border-[#6348FE]"
                }`}
                placeholder="e.g. 123"
                maxLength={3}
                inputMode="numeric"
                {...register("cvc", {
                  required: "Can't be blank",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Numbers only",
                  },
                  minLength: {
                    value: 3,
                    message: "Must be 3 digits",
                  },
                })}
                name="cvc"
                onChange={handleChange}
              />

              {errors.cvc && (
                <p className="text-[#EF4444] text-[12px] mt-1">
                  {errors.cvc.message}
                </p>
              )}
            </div>
          </div>

          <button
            className="bg-[#21092F] hover:bg-[#3a1352] p-3.75 text-white font-medium rounded-lg cursor-pointer transition-colors mt-3"
            type="submit"
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
}