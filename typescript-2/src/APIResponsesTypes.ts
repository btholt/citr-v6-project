export interface Pet {
  id: number;
  name: string;
  animal: "dog" | "cat" | "bird" | "reptile" | "rabbit";
  description: string;
  breed: string;
  images: string[];
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
