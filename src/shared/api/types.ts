export interface ITranslation {
  en: string;
  ru: string;
  uz: string;
}

export interface IImage {
  id: string;
  imageUrl: string;
  product_id: string;
}

export interface ApiError {
  message: string;
  error: string;
  statusCode: number;
}
