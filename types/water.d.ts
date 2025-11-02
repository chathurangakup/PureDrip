// types.ts
export interface WaterItem {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
}

export interface WaterContextType {
  waterItems: WaterItem[];
  loading: boolean;
  fetchWaterItems: () => void;
}
