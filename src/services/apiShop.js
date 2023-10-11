import supabase from './supabase';

export async function getProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) throw new Error('Products could not be loaded');

  return data;
}

export async function createOrder(orderItem) {
  const { data, error } = await supabase
    .from('order')
    .insert([orderItem])
    .select();

  if (error) throw new Error('Order could not be created');

  return data;
}

export async function getOrder(id) {
  const { data, error } = await supabase.from('order').select().eq('id', id);

  if (error) throw new Error('Order could not be loaded');

  return data;
}
