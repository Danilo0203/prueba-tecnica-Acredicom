import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLibrosStore = create(
  persist(
    (set) => ({
      libros: [],
      setLibros: (libros) => set({ libros }),
      addLibro: (libro) =>
        set((state) => ({ libros: [...state.libros, libro] })),
      addAutor: (autor) =>
        set((state) => ({ libros: [...state.libros, autor] })),
    }),
    {
      name: "libros",
    },
  ),
);
