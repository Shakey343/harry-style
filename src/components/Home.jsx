import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <main>
      <div className="d-sm-container">
        <div className="aboutInfo" id="about">
          <div className="col-md-8 col-12 p-5">
            <h2>Who am I?</h2>
            <p>I am a composer, arranger and musical director. My work has been broadcast on television and radio, and performed on various stages and concert halls around the UK. I have had the pleasure of working with so many inspiring and talented people along the way and I am always learning from experiences.</p>
            <p>With classical and jazz training at Junior Guildhall School of Music &amp; Drama, I graduated from Mountview Academy of Theatre Arts with an MA in Writing Musicals, as well as a BA in Music from the University of Leeds.</p>
            <p>I am currently working on various ongoing and new projects, including <a href="#fuof"><b><i>Forgive Us, Oh Father!</i></b></a> which I am co-writing with <a href="http://arnoudb.com/" target="_blank"><b><i>Arnoud Breithbarth</i></b></a>, as well as the release of new material with the barbershop quartet <a href="https://www.facebook.com/ashatones" target="_blank"><b><i>The Ashatones</i></b></a>.</p>
            <p>If you would like to get in touch about anything, from working on a new musical to needing a pianist for a gig, please send an email to: <a href="mailto:h.style@rocketmail.com?subject=Music%20Enquiry&amp;body=Hello%20Harry..." target="_blank" title="Email">h.style@rocketmail.com</a></p>
            <p>I look forward to hearing from you!</p>
          </div>
          <div className="harryImg col-md-4 .d-none .d-md-block">
            <img alt="A headshot of me" src="https://www.harrystyle.co.uk/assets/harry_headshot…a23697467269312e8e308a8783d9c47f6971276793f0a.jpg" />
          </div>
        </div>
      </div>
      </main>
    </>
  );
};

export default Home;
