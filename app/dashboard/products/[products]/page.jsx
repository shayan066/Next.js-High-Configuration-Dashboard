import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.image}>
          <Image src="/laptop.jpg" alt="product image" fill/>
        </div>
        Laptop
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Iphone" name="iphone" required/>
          <label htmlFor="title">Price</label>
          <input type="number" placeholder="price" name="price" required/>
          <label htmlFor="title">Stock</label>
          <input type="number" placeholder="stock" name="stock" required/>
          <label htmlFor="title">Color</label>
          <input type="text" placeholder="color" name="color" required/>
          <label htmlFor="title">Size</label>
          <input type="text" placeholder="size" name="size" required/>
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="Homedecor">Home Decor</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea name="desc" id="desc" rows={4}></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
