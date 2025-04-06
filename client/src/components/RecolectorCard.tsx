type RecolectorCardProps = {
  rate: number;
  name: string;
  description: string;
  photo?: string;
  id: number;
  credentialNumber: number;
};

export default function RecolectorCard({
  rate,
  name,
  description,
  //   photo,
  credentialNumber,
  id,
}: RecolectorCardProps) {
  return (
    <div className="bg-[#49C44C] rounded-lg shadow-lg p-3 sm:w-56 w-50 flex flex-col items-center relative">
      <p className="absolute left-5">{id ? `#${id}` : "#ID"}</p>
      <div className="rounded-full bg-slate-100 sm:size-24 size-16  grid place-content-center">
        <picture>
          <img
            src={/*photo ? photo : */ "/image/perfil-blanco.webp"}
            alt="Recolector"
            className="rounded-full"
          />
        </picture>
      </div>
      <h2 className="sm:text-lg text-base font-bold mt-4">
        {name ? name : "Nombre del Recolector"}
      </h2>
      <p className="text-[#263238] mt-2 text-xs">
        {description ? description : "Descripción breve del recolector."}
      </p>
      <p className="text-[#263238] mt-2 text-xs">
        Credencial: {credentialNumber}
      </p>
      <div className="bg-black rounded-2xl px-2 py-1 my-2">
        ⭐ {rate ? rate : 0}
      </div>
    </div>
  );
}
