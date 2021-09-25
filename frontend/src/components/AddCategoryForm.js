import { useRef } from "react";

function AddCategoryForm(props) {
  const nameInputRef = useRef();
  const typeInputRef = useRef();

  function formSumbitHandler(e) {
    e.preventDefault();
    const category = {
      name: nameInputRef.current.value,
      category: typeInputRef.current.value
    }

    props.onAddCategory(category);
  }

  return (
    <form onSubmit={formSumbitHandler}>
      <label>Kategooria nimetus</label>< br/>
      <input type="text" required ref={nameInputRef}/><br />
      <label>Kategooria tyyp</label>< br/>
      <select ref={typeInputRef}>
          <option value="BASIC">BASIC</option>
          <option value="DELUXE">DELUXE</option>
          <option value="PREMIUM">PREMIUM</option>
      </select>
      <button>Sisesta uus kategooria</button>
    </form>
  )
}

export default AddCategoryForm;