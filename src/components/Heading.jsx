//eslint-disable-next-line
const Heading = ({ title, text }) => {
  return (
    <div className="mb-10 sm:mx-auto sm:text-center md:w-8/12">
      <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default Heading;
