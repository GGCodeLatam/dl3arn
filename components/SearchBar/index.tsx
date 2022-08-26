import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import searchCourse from "services/firebase/store/searchCourse";
import { InputChange } from "utils/types";

function SearchBar() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const p = async () => {
      const data = await searchCourse(query);
      console.log({ query, data });
    };

    const timeout = setTimeout(p, 375);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [query]);

  const handleChange = ({ target: { value } }: InputChange) => setQuery(value);

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
