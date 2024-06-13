import { useLibrosStore } from "../../store/useLibrosStore";
import { FormCreateLibro } from "../components/FormCreateLibro";

export const Libros = () => {
  const dataLibros = useLibrosStore((state) => state.libros);
  // Listar toda la lista de libros solo el nombre del libro
  return (
    <div>
      <div className="flex flex-col gap-2 items-start">
        <FormCreateLibro />
        <h2 className="mb-5 text-2xl font-bold">Lista de Libros</h2>
      </div>
      <ul>
        {dataLibros.map((libro) => (
          <li className="ml-10 list-disc" key={libro.id}>
            {libro.libro}
          </li>
        ))}
      </ul>
    </div>
  );
};
