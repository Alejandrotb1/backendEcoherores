type RecolectorCardProps = {
  photo?: string;
  name: string;
  ci: string;
  zoneRecolector: string;
  credentialNumber: string;
  rate: number;
};

export default function RecolectorCard({
  photo,
  name,
  ci,
  zoneRecolector,
  credentialNumber,
  rate,
}: RecolectorCardProps) {
  return (
    <div className="bg-[#263238] rounded-lg shadow-lg p-3 sm:w-56 w-50 flex flex-col items-center relative">
      <div className="rounded-full bg-slate-100 sm:size-24 size-16  grid place-content-center">
        <picture>
          <img
            src={photo || "/image/perfil-blanco.webp"}
            alt="Recolector"
            className="rounded-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/image/perfil-blanco.webp";
              (e.target as HTMLImageElement).onerror = null;
            }}
          />
        </picture>
      </div>
      <h2 className="sm:text-lg text-base font-bold mt-4">
        {name ? name : "Nombre del Recolector"}
      </h2>
      <p className="mt-2 text-xs">CI: {ci ? ci : "CI del Recolector"}</p>
      <p className="mt-2 text-xs">
        {zoneRecolector ? zoneRecolector : "Zona del recolector."}
      </p>
      <p className="mt-2 text-xs">Credencial: {credentialNumber}</p>
      <div className="bg-black rounded-2xl px-2 py-1 my-2">
        ⭐ {rate ? rate : 0}
      </div>
    </div>
  );
}
