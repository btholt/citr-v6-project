import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function useDetails() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!detail) {
      setDetail([]);
    } else {
      getData();
    }

    async function getData() {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
      const data = await res.json();

      setDetail(data.pets[0]);
      console.log(data.pets);
    }
  }, [id]);

  return detail;
}



import useDetails from "./useDetail";
import { useState } from "react";

function Details() {
  const { animal, breed, city, state, description, name } = useDetails();

  return (
    <div className="details">
      <h2>{name}</h2>
      <h2>
        {animal} - {breed} - {city} - {state}{" "}
      </h2>
      <p>{description} </p>
      <button>Adopt {name}</button>
    </div>
  );
}

export default Details;
