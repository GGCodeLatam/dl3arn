import Link from "next/link";
import { NavCategories } from "./Categories.styles";

const categories = ["diseño", "nfts", "marketing"];
function Categories() {
  return (
    <section>
      <h2>categorias</h2>
      <NavCategories>
        <ul>
          {categories.map((category) => (
            <li className="category" key={category}>
              <Link href={`/courses/${category}`}>
                <a href="">{category}</a>
              </Link>
            </li>
          ))}
        </ul>
      </NavCategories>
    </section>
  );
}

export default Categories;
