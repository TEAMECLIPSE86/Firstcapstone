import React, { useState } from "react";
import "./Search.css";
import sidehustle from "./sidehustle.png";

const Search = () => {
  const [name, setName] = useState(true);
  const [na, setNa] = useState(" ");

  const changeHandler = (event) => {
    setName(false);
    setNa(event.target.value);
    if (event.target.value.trim().length === 0) {
      setName(true);
    }
  };

  return (
    <div className="contain">
      <div>{name ? <img src={sidehustle} alt="logo" /> : <h1>{na}</h1>}</div>
      <div>
        <input type="text" onChange={changeHandler} />
        <div class="Button">
          <button type="submit" className="one">
            Sidehustle Search
          </button>
          <button className="two">I'm Feeling lucky</button>
        </div>
      </div>
      <div><p>Google offered in: <a href="https://www.google.com/setprefs?sig=0_006LNXauex81XDMKaF3DmPyjM7Q%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwiIj_Pilon0AhW1wosBHX5rCIQQ2ZgBCA4">Hausa</a> <a href="https://www.google.com/setprefs?sig=0_006LNXauex81XDMKaF3DmPyjM7Q%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwiIj_Pilon0AhW1wosBHX5rCIQQ2ZgBCA8">Igbo</a> <a href="https://www.google.com/setprefs?sig=0_006LNXauex81XDMKaF3DmPyjM7Q%3D&hl=yo&source=homepage&sa=X&ved=0ahUKEwiIj_Pilon0AhW1wosBHX5rCIQQ2ZgBCBA">Èdè Yorùbá</a>  <a href="https://www.google.com/setprefs?sig=0_006LNXauex81XDMKaF3DmPyjM7Q%3D&hl=pcm&source=homepage&sa=X&ved=0ahUKEwiIj_Pilon0AhW1wosBHX5rCIQQ2ZgBCBE">Nigerian Pidgin</a></p></div>
    </div>
  );
};

export default Search;
