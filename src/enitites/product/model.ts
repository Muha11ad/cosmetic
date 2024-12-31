import { IImage, ITranslation } from "@/shared/api";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  Images: IImage[];
  created_at: Date;
  available: boolean;
  category_id: string;
  characteristic_id: string;
  instruction: ITranslation;
  Characteristic: any;
}
