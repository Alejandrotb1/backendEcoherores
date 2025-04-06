import RecolectorCard from "../components/RecolectorCard";
import { temporalRecolectores } from "../types/temporal-recolectores";

export default function EcoHeroes() {
  return (
    <div className="flex flex-wrap justify-center sm gap-4">
      {temporalRecolectores.map((recolector) => (
        <RecolectorCard
          key={recolector.id}
          rate={recolector.rate}
          name={recolector.name}
          description={recolector.description}
          photo={recolector.photo}
          credentialNumber={recolector.credentialNumber}
          id={recolector.id}
        />
      ))}
    </div>
  );
}
