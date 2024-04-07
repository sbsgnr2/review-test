export interface ImageUploadType { 
  name: string; 
  alt: string 
  resetSignal?: boolean;
  image?: string;
  handleFunction?: (value: string|null|undefined) => void;
}
