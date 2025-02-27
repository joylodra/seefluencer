import Button from "../ui/Button";

interface PricingBoxProps {
  pricing: string;
  currentPricing: string;
  highlights: string[];
  participants: number;
  participantsImages: string[];
  hrefLink: string;
}

export default function PricingBox({
  pricing,
  currentPricing,
  highlights,
  participantsImages,
  participants,
  hrefLink,
}: PricingBoxProps) {
  return (
    <div className="border border-gray-200 shadow-md p-5 rounded-xl flex flex-col gap-5">
      <div className="text-center flex flex-col gap-5 items-center">
        <div>
          <p className="line-through">Rp{pricing}</p>

          <h3>Rp{currentPricing}</h3>
        </div>

        <small className="font-bold rounded-md w-fit p-2 bg-sky-50 text-xs uppercase text-brand">
          Slot hanya tersisa 5 lagi!
        </small>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 text-center">
        <Button hrefLink={hrefLink} buttonText={"Apply Now"} full external />
        <small>*Harga bisa naik sewaktu-waktu!</small>
      </div>

      <hr />

      {/* Highlights */}
      <ul className="space-y-2 mb-4">
        {highlights!.map((highlight, index) => (
          <li key={index} className="flex gap-2 items-center text-gray-700">
            <div className="text-brand">✔</div> {highlight}
          </li>
        ))}
      </ul>

      {/* Participants */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex -space-x-2">
          {participantsImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="participant"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>

        <small className="text-gray-500">
          {participants}+ alumni sudah lulus!
        </small>
      </div>
    </div>
  );
}
