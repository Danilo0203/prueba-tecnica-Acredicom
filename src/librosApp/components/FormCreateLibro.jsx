import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useLibrosStore } from "../../store/useLibrosStore";

export const FormCreateLibro = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const addLibro = useLibrosStore((state) => state.addLibro);
  const onSubmitLibro = (data) => {
    const { autor, libro } = data;
    const nuevoLibro = {
      id: Date.now(),
      autor: autor.trim(),
      libro: libro.trim(),
    };
    addLibro(nuevoLibro);
    onClose();
    reset();
  };
  return (
    <>
      <Button onPress={onOpen} color="primary">
        Crear un nuevo Libro
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <form
          onSubmit={handleSubmit(onSubmitLibro)}
          className="flex flex-col gap-4"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Nuevo Libro
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Autor"
                    placeholder="Ingrese el nombre del autor"
                    variant="bordered"
                    {...register("autor")}
                  />
                  <Input
                    label="Libro"
                    placeholder="Ingrese el nombre del libro"
                    variant="bordered"
                    {...register("libro")}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Crear Libro
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
