export interface Product {
  id?: number;
  usuario?: string;
  nombre?: string;
  referencia?: string;
  imagen?: string;
  valor?: number;
  descripcion?: string;
  cantidad?: number;
  costo?: number;
  garantia?: number;
  activo?: boolean;
  fechaCreacion?: string;
  iva?: number;
  
  // Adicionales
  [key: string]: any;
}