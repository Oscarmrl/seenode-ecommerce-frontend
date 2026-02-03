export const dynamic = "force-dynamic";
type Product = {
  id: number;
  name: string;
  descripcion: string;
  price: number;
  imagenUrl: string;
};
export default async function Home() {
  const API = process.env.BACKEND_URL || "http://localhost:3000";
  const response = await fetch(`${API}/products`);

  const products = await response.json();

  console.log(products);

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      <h1 className=" text-center font-bold text-4xl mt-10">Productos</h1>

      {products.map((product: Product) => (
        <div
          key={product.id}
          className=" grid grid-cols-3 gap-4 p-20 container mx-auto"
        >
          <div className=" bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md">
            <img src={product.imagenUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.descripcion}</p>
            <span>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
