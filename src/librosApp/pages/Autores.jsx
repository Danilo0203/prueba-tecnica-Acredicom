import { useLibrosStore } from "../../store/useLibrosStore";
import { FormCreateAutor } from "../components/FormCreateAutor";

export const Autores = () => {
  const dataLibros = useLibrosStore((state) => state.libros);
  return (
    <div>
      <div className="flex flex-col items-start gap-2">
        <FormCreateAutor />
        <h2 className="mb-5 text-2xl font-bold">Lista de Autores</h2>
      </div>
      <ul>
        {dataLibros.map((autor) => (
          <li className="ml-10 list-disc" key={autor.id}>
            {autor.autor}
          </li>
        ))}
      </ul>
    </div>
  );
};
