import { create } from "zustand";
import { IProduct } from "./model";
import { baseApi } from "@/shared/api";
import { ENDPOINTS } from "@/shared/api/endpoints";

interface ProductStore {
  loading: boolean;
  error: string | null;
  product: IProduct | null;
  products: IProduct[] | [];
  getProductById: (productId: string) => Promise<void>;
  getProductByName: (productName: string) => Promise<void>;
  getProductByCategoryName: (categoryName: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  error: null,
  products: [],
  product: null,
  loading: false,

  getProductByCategoryName: async (categoryName: string) => {
    set({ loading: true, error: null });
    const result = await baseApi.get<IProduct[]>(
      `${ENDPOINTS.productByCategory}/${categoryName}`
    );
    if ("error" in result) {
      set({ error: result.message, loading: false });
    } else {
      setTimeout(() => {
        set({ products: result, loading: false });
      }, 500);
    }
  },

  getProductByName: async (productName: string) => {
    set({ loading: true, error: null });
    const result = await baseApi.get<IProduct[]>(
      `${ENDPOINTS.productsByName}/${productName}`
    );
    if ("error" in result) {
      set({ error: result.message, loading: false });
    } else {
      set({ products: result, loading: false });
    }
  },

  getProductById: async (productId: string) => {
    set({ loading: true, error: null });
    const result = await baseApi.get<IProduct>(
      `${ENDPOINTS.productById}/${productId}`
    );
    if ("error" in result) {
      set({ error: result.message, loading: false });
    } else {
      set({ product: result, loading: false });
    }
  },
}));
