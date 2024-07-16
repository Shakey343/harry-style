import { Cloudinary } from "@cloudinary/url-gen";

const Banner = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dov7jlxo5",
    },
  });

  const pianoImg = cld.image("harrystyle/images/at_the_piano").toURL();

  return (
    <div
      className="py-[25vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(${pianoImg})`,
      }}
    >
      <div className="container mx-auto drop-shadow-2xl text-3xl font-medium relative text-hsBeige">
        <h1>
          <strong>Yes</strong> that&apos;s my real name
          <br />
          <div className="absolute left-16">
            and <strong>no</strong>,
          </div>
          <br />
          <div className="absolute left-12">
            I&apos;m not from One Direction
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
