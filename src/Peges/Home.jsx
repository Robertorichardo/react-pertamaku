import HyperLink from "../components/HyperLink";
export default function Home() {
  const data = {
    name: "Rori",
    from: "Asmat",
  };
  const data2 = ["Ngoding", "Hitam", "Kucing"];
  const data3 = [
    {
      name: "Rori",
      from: "Asmat",
    },
    {
      name: "Ben",
      from: "Surabaya",
    },
    {
      name: "Ilum",
      from: "Asmat",
    },
  ];

  const angka =[1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="centainer mx-auto py-20">
      <h1 className="text-3xl text-cyan-500 text-center font-teko">Home Pege</h1>
      <div className="flex gap-8 justify-center my-6">
      <HyperLink to="/about">
        <p>Go to About</p>
      </HyperLink>
      <HyperLink to="/cuaca">
        <p>Go to Cuaca</p>
      </HyperLink>  
      <HyperLink to="/portofolio">
        <p>Go to Portofolio</p>
      </HyperLink>
      </div>
      
      <div className="text-3xl">
        <h2>
          Nama Saya <span className="text-red-500 text-center">{data.name}</span>
        </h2>
        <h2>
          Saya dari <span className="text-red-500 text-center">{data.from}</span>
        </h2>
      </div>
      <div className="text-3xl text-center">
        <p>Hobi :{data2[0]}</p>
        <p>Warna Kesukaan : {data2[1]}</p>
        <p>Hewan Peliharaan:{data2[2]}</p>
      </div>
      <div className="text-3xl text-center">
        <p>Hobi :{data2[0]}</p>
        <p>Warna Kesukaan : {data2[1]}</p>
        <p>Hewan Peliharaan:{data2[2]}</p>
      </div>
      <div className="text-3xl bg-green-500 text-center">
        {data3.map((bio) => (
          <p key={bio.name}>
            {" "}
            {bio.name} dari {bio.from}
          </p>
        ))}
      </div>
      <div className="text-3xl bg-sky-500 text-center">
        {data3
          .filter((bio) => bio.from === "Surabaya")
          .map((bio) => (
            <p key={bio.name}>
              {bio.name} dari {bio.from}
            </p>
          ))}
      </div>
    <div className="text-3xl bg-red-500 text-center">
        {angka.reduce((a, b) => a + b, 0)}
    </div>

    </div>
  );
}
