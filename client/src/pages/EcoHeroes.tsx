import RecolectorCard from "../components/RecolectorCard";
import { RecolecoresRes } from "../responses/RecolecoresRes";
import useGet from "../hooks/useGet";
import { useState } from "react";
import Button from "../components/Button";

export default function EcoHeroes() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: recolectores, lastPage = 1 } = useGet<RecolecoresRes[]>(
    `recolectores?page=${currentPage}`
  );

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className=" w-[90%] mx-auto my-5">
      <h2 className=" text-4xl font-bold text-black my-5">
        Nuestros Eco Heroes
      </h2>
      <div className="flex flex-wrap gap-4 my-5">
        {!recolectores
          ? "Cargando recolectores..."
          : recolectores.map((recolector) => (
              <RecolectorCard
                key={recolector.ci}
                name={recolector.nombre}
                lastName={recolector.apellido}
                ci={recolector.ci}
                zoneRecolector={recolector.direccion}
                credentialNumber={recolector.licencia}
              />
            ))}
      </div>
      <div className="flex justify-between items-center">
        <Button
          onClick={() =>
            currentPage > 1
              ? setCurrentPage((currentPage) => currentPage - 1)
              : null
          }
          text="Volver"
          colorBg="black"
          colorText="white"
          disabled={currentPage === 1}
        />
        <span className="text-black">
          Página {currentPage} - {lastPage}
        </span>
        <Button
          onClick={handleNextPage}
          text="Siguiente"
          colorBg="black"
          colorText="white"
          disabled={currentPage === lastPage}
        />
      </div>
    </section>
  );
}
