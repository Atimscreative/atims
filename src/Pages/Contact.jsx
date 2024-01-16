const Contact = () => {
  return (
    <div className="h-screen w-full bg-neutral-950 p-24">
      <div className="bg-neutral-900 p-8">
        <h3 className="font-urbanist text-xl font-bold capitalize text-neutral-50">
          quasi consequuntur vitae architecto illum nobis
        </h3>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          autem id inventore ad a obcaecati et. Facilis illum nobis autem
          tempora, quasi consequuntur vitae architecto, atque laborum aperiam
          repudiandae aliquam.
        </p>
        <button className="mt-3 rounded-lg  bg-neutral-500 px-4 py-1.5 hover:bg-blue-400">
          Call Me
        </button>
        <br />
        <button className="mt-3 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 px-4 py-1.5 text-white">
          Call Me
        </button>
      </div>
    </div>
  );
};

export default Contact;
