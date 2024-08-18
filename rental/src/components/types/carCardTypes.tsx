export interface carTypeObject {
  id: string;
  classCar: string;
  price: string[];
  weight: number;
  name: string;
  engineType: string;
  mileagePer100Km: number;
  image: string;
  transmission: "automatic" | "manual";
  engineCapacity: number;
}
