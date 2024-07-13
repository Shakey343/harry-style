const Banner = () => {
  return (
    <div
      className="py-[25vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(https://www.harrystyle.co.uk/assets/at_the_piano-927c6b07024ae358bb711c8f859fccff7657aefd1790a0db7530364d65168056.jpg)",
      }}
    >
      <div className="container mx-auto drop-shadow-2xl text-3xl font-medium relative text-hsBeige">
        <h1>
          Yes that&apos;s my real name
          <br />
          <div className="absolute left-16">and <span className="font-bold">no</span>,</div>
          <br />
          <div className="absolute left-12">I&apos;m not from One Direction</div>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
