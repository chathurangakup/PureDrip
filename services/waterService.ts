// waterService.ts
import Images from "@/constants/images";
import { WaterItem } from "../types/water.d";

// Mock API call
export const getWaterItems = (): Promise<WaterItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Distilled Water",
          type: "Distilled",
          price: "2.50",
          image: Images.Item1,
        },
        {
          id: "2",
          name: "Spring Water",
          type: "Spring",
          price: "3.00",
          image: Images.Item2,
        },
        {
          id: "3",
          name: "Purified Water",
          type: "Purified",
          price: "2.75",
          image: Images.Item3,
        },
        {
          id: "4",
          name: "Mineral Water",
          type: "Spring",
          price: "3.50",
          image: Images.Item4,
        },
        {
          id: "5",
          name: "Alkaline Water",
          type: "Purified",
          price: "4.00",
          image: Images.Item1,
        },
        {
          id: "6",
          name: "Glacial Water",
          type: "Spring",
          price: "5.00",
          image: Images.Item2,
        },
        {
          id: "7",
          name: "Oxygenated Water",
          type: "Distilled",
          price: "3.25",
          image: Images.Item3,
        },
        {
          id: "8",
          name: "Filtered Water",
          type: "Purified",
          price: "2.80",
          image: Images.Item4,
        },
        {
          id: "9",
          name: "Natural Spring Water",
          type: "Spring",
          price: "3.75",
          image: Images.Item1,
        },
        {
          id: "10",
          name: "Electrolyte Water",
          type: "Distilled",
          price: "3.50",
          image: Images.Item2,
        },
      ]);
    }, 1500); // simulate network delay
  });
};
