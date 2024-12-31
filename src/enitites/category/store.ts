import { create } from "zustand";
import { ICategory } from "./model";
import { baseApi } from "@/shared/api";
import { ENDPOINTS } from "@/shared/api/endpoints";

interface CategoryStore {
  categories: ICategory[] | [];
  loading: boolean;
  error: string | null;
  getAllCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  loading: false,
  error: null,

  getAllCategories: async () => {
    set({ loading: true, error: null });
    const result = await baseApi.get<ICategory[]>(ENDPOINTS.category);
    if ("error" in result) {
      set({ error: result.message, loading: false });
    } else {
      set({ categories: result, loading: false });
    }
  },
}));
