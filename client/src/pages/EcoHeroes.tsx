import RecolectorCard from "../components/RecolectorCard";
import { temporalRecolectores } from "../types/temporal-recolectores";

export default function EcoHeroes() {
  return (
    <div className="flex flex-wrap justify-center sm gap-4">
      {temporalRecolectores.map((recolector) => (
        <RecolectorCard
          rate={recolector.rate}
          name={recolector.name}
          ci={recolector.ci}
          zoneRecolector={recolector.zoneRecolector}
          photo={recolector.photo}
          credentialNumber={recolector.credentialNumber}
        />
      ))}
    </div>
  );
}
