import Counter from "../Counter/page";

function Commingsoon() {

  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
      <div>
        <h1 className="text-white md:text-4xl lg:text-9xl font-extrabold">
          Coming Soon
        </h1>
      </div>
      <Counter hours={9} mins={59} secs={59}/>
    </div>
  );
}

export default Commingsoon;
