import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const Productpage = async () => { 

  const products = await fetchProducts();
  console.log(products);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/addProduct">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=> {
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/avatar.jpg"
                  alt="product image"
                  height={40}
                  width={40}
                  className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.createdAt?.toString().slice(4,16)}</td>
            <td>{product.stock}</td>
            <td>
              <Link href={`/dashboard/products/${product.id}`}>
                <button className={`${styles.button} ${styles.view}`}>
                Update
                </button>
              </Link>
              <form action={deleteProduct}>
                <input type="hidden" name="id" value={product.id} />
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
              </form>
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Productpage;
