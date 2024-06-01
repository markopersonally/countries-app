import Axios from "axios";

export default function Item() {
  Axios.get("https://restcountries.com/v3.1/all").then((res) => {
    console.log(res.data);
  });

  return (
    <div className="w-[350px] p-3 flex flex-col gap-3 bg-neutral-300">
      <img src="" alt="" />
      <h3>Title</h3>
      <h4>Population:</h4>
      <h4>Region:</h4>
      <h4>Capital:</h4>
    </div>
  );
}
