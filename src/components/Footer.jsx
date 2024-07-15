const Footer = () => {
  return (
    <div className="relative flex justify-center p-4 mt-auto bg-hsRed border-t-2 border-hsBeige pb-12 sm:pb-4" id="footer">
      <a className="text-hsBeige drop-shadow-lg mx-4" href="https://www.facebook.com/harry.samuel.39750" target="_blank">
        <i className="fab fa-facebook fa-2x hover:text-fbBlue transition"></i>
      </a>
      <a className="text-hsBeige drop-shadow-lg mx-4" href="https://twitter.com/harry_s_style?lang=en-gb" target="_blank">
        <i className="fab fa-twitter fa-2x hover:text-twBlue transition"></i>
      </a>
      <a className="text-hsBeige drop-shadow-lg mx-4" href="https://www.instagram.com/harry_s_style/?hl=en" target="_blank">
        <i className="fab fa-instagram fa-2x hover:text-instaPink transition"></i>
      </a>
      <a className="text-hsBeige drop-shadow-lg mx-4" href="https://soundcloud.com/harry-style" target="_blank">
        <i className="fab fa-soundcloud fa-2x hover:text-scOrange transition"></i>
      </a>
      <a
        className="text-hsBeige drop-shadow-lg mx-4"
        href="mailto:h.style@rocketmail.com?subject=Music%20Enquiry&body=Hello%20Harry..."
        target="_blank"
        title="Email"
      >
        <i className="fas fa-envelope fa-2x hover:text-emailGray transition"></i>
      </a>
      <p className="absolute sm:right-0 bottom-1 sm:mr-6 font-mono text-xs sm:text-sm">Copyright © <a href="https://github.com/shakey343" target="_blank" rel="noreferrer" className="hover:text-emailGray transition"><strong>Jake Pople</strong></a></p>
    </div>
  );
};

export default Footer;
