import { FormCreate } from "../components/FormCreate";
import { CardsLibros } from "../components/CardsLibros";

export const Inicio = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <FormCreate />
      <CardsLibros />
    </div>
  );
};
