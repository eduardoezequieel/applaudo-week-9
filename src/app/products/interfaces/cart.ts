export interface Cart {
  id?: number;
  user_id?: number;
  number?: number;
  status?: string;
  total?: number;
  total_items?: number;
  completed_at?: Date;
  created_at?: Date;
  items: CartProduct[];
  _destroy?: boolean;
}

export interface CartProduct {
  id?: number;
  quantity?: number;
  product_variant_id?: number;
  product_id?: number;
  order_id?: number;
  total?: number;
  price?: number;
  name?: string;
  description?: string;
  promotion?: string;
}
