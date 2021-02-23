import { useParams } from "react-router-dom";

const Details = (props) => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
