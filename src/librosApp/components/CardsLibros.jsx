import { useLibrosStore } from "../../store/useLibrosStore";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const CardsLibros = () => {
  const dataLibros = useLibrosStore((state) => state.libros);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {dataLibros.map((libro) => (
          <Card key={libro.id} className="py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <p className="text-tiny font-bold uppercase">Autor</p>
              <small className="text-default-500">{libro.autor}</small>
              <h4 className="text-large font-bold">Libro</h4>
              <small className="text-default-500">{libro.libro}</small>
            </CardHeader>
            <CardBody className="flex items-center justify-center">
              <Image
                src={`https://picsum.photos/seed/${libro.id}/200/300`}
                alt={libro.libro}
                width={200}
                height={300}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      {dataLibros.length === 0 && (
        <p className="text-default-500 text-start text-xl font-bold">
          No hay libros registrados
        </p>
      )}
    </>
  );
};
