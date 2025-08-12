import { useEffect } from 'react';

const MainContent = () => {
  useEffect(() => {
    // Initialize carousel and other interactions
    const script = document.createElement('script');
    script.innerHTML = `
      $(document).ready(function(){
        // Initialize carousel
        $('#myCarousel').carousel({
          interval: 3000,
          pause: false,
          wrap: true
        });
        
        $('#myCarousel').on('slide.bs.carousel', function (e) {
          var indicators = $(this).find('.carousel-indicators li');
          indicators.eq(e.from).css({'background-color':'transparent'});
          indicators.eq(e.to).css({'background-color':'#fff'});
        });
        
        // Mobile menu toggle
        $('.menu-icon').click(function(){
          $('#mobileMenu').slideToggle();
          $(this).find('i').toggleClass('fa-bars fa-times');
          var expanded = $(this).attr('aria-expanded') === 'true';
          $(this).attr('aria-expanded', !expanded);
        });
        
        // Social icon hover effects
        $('.social-icon').hover(
          function() {
            $(this).css({
              'transform': 'translateY(-3px)',
              'box-shadow': '0 5px 15px rgba(0,0,0,0.3)'
            });
          },
          function() {
            $(this).css({
              'transform': 'translateY(0)',
              'box-shadow': '0 2px 5px rgba(0,0,0,0.2)'
            });
          }
        );
        
        // Responsive menu handling
        function checkScreenSize() {
          if ($(window).width() <= 768) {
            $('.menu-icon').show();
            $('.menu-bar').hide();
            $('#mobileMenu').hide();
          } else {
            $('.menu-icon').hide();
            $('.menu-bar').show();
            $('#mobileMenu').hide();
          }
        }
        
        checkScreenSize();
        $(window).resize(checkScreenSize);
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Carousel */}
      <header role="banner">
        <section className="carousel slide" data-ride="carousel" id="myCarousel" style={{margin:0, padding:'0 0 0 0', overflow:'hidden'}}>
          <div className="carousel-inner" style={{margin:0, padding:0}}>
            <figure className="carousel-item active">
              <img className="d-block w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0JJy6lXU2vTH7ujOb6pxyY_SaJ5Amj15YTabHUrarDaS91I1Evp7WT8M9ZD5bXMypNrTdzhGcQMO_DSNjrda1YU-PPLo_8ZM0ifY4KhSkGZlUeiCETBD-10_4SQ8ejimEj1TE_BGZaFK_FWyFg73nz2BhceLFUHodelEazr_H6J3bJcLsEf8e7EnLy58/s16000/IMG_20250406_061603_244.jpg" style={{width:'100%', objectFit: 'cover'}} alt="JaHiRuL isLaM AKASH standing in front of a mosque with traditional Islamic attire" />
            </figure>
            <figure className="carousel-item">
              <img className="d-block w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikZItgM9J3yGTvJMPEDN_be5TswzL4v-jnWuNUigepG7ddUjWaksZng7iyR6E3GszLRhyOWl5SazYB2UDyZn0Hh12XRqFNz3FeXfC0SNViHlTv0FUFndT95NoIVsS0rA3kAAypnGwZyrRQxY3Vng7Mxl7s0kwoyNML9_7yViB-rg01z5Ng6rYH0goUjCE/s16000/IMG_20250406_172816.jpg" style={{width:'100%', objectFit: 'cover'}} alt="JaHiRuL isLaM AKASH giving a speech at an Islamic event" />
            </figure>
            <figure className="carousel-item">
              <img className="d-block w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGe2PhJJR1ViZVrSRZftDY2R5r8oRlJP1AVSjc2aZagSCc5wlfEUzlDa529Ya5sBkQDrbWWRys_kvk4-X7r6jkyaa-pkgTnANZIhoJEdK1Tf1M0qMHl4eFrE2wUhm0LCx83ZWy0-qF_xmMCGboWsbsXprATA1FbGAsnWTDSQOE7GP1bDB7PiI65kDAEOk/s16000/IMG_20250406_173204.jpg" style={{width:'100%', objectFit: 'cover'}} alt="JaHiRuL isLaM AKASH reading Islamic literature in a library setting" />
            </figure>
            <figure className="carousel-item">
              <img className="d-block w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_C9hNCA-ZBPzGM0LEF1LkoJLQQ2nS9kvG_z3pjifT332DqPxvat5oE_D0M0IaEljP6DzXsVY288ES7kPobzPq-pgoqD3NhcNb6HEzh6VvEZyKouj3anLZcC0HDghw5vTMTQIKO4W1RV6k81rvt5w2JeV5G5zc1eTAnB_1cJlf_gPDNLrEfGLW8XXP_F0/s16000/IMG_20250406_175816.jpg" style={{width:'100%', objectFit: 'cover'}} alt="JaHiRuL isLaM AKASH leading a group discussion on Islamic topics" />
            </figure>
          </div>
          <nav aria-label="Carousel navigation">
            <ol className="carousel-indicators" style={{bottom:'20px', margin:0, padding:0}}>
              <li className="active" data-slide-to="0" data-target="#myCarousel" style={{width:'12px', height:'12px', borderRadius:'50%', margin:'0 6px', backgroundColor:'#fff', border:'2px solid #fff'}} aria-label="Slide 1: JaHiRuL isLaM AKASH at mosque"></li>
              <li data-slide-to="1" data-target="#myCarousel" style={{width:'12px', height:'12px', borderRadius:'50%', margin:'0 6px', backgroundColor:'transparent', border:'2px solid #fff'}} aria-label="Slide 2: JaHiRuL isLaM AKASH giving speech"></li>
              <li data-slide-to="2" data-target="#myCarousel" style={{width:'12px', height:'12px', borderRadius:'50%', margin:'0 6px', backgroundColor:'transparent', border:'2px solid #fff'}} aria-label="Slide 3: JaHiRuL isLaM AKASH reading"></li>
              <li data-slide-to="3" data-target="#myCarousel" style={{width:'12px', height:'12px', borderRadius:'50%', margin:'0 6px', backgroundColor:'transparent', border:'2px solid #fff'}} aria-label="Slide 4: JaHiRuL isLaM AKASH group discussion"></li>
            </ol>
            <a className="carousel-control-prev" data-slide="prev" href="#myCarousel" role="button" style={{background:'none'}} aria-label="Previous slide">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" data-slide="next" href="#myCarousel" role="button" style={{background:'none'}} aria-label="Next slide">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </nav>
        </section>
      </header>

      {/* Profile Section */}
      <section className="bottom-section" style={{backgroundColor: '#406156', padding: '20px', marginTop: '-20px'}}>
        <div className="content-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <a href="about.html" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="logo-container">
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5fAus4nNLAcbE8LI1YQNB5FOxXWmPtpyle837UOkeZXphOYwTr3h82kQKJvMOWFnyJKant4ck2rr2tokivTZoPCTFutj2la3bKs2BjdyGDSuUQNyXRYRNjmoVldf7sxp-zKcXxo1_lSOEVdErIGkktM3Wgc1g_Xsal4QoeYsmehPi89EsLsqd1DBkjfc/w632-h640/jahirul-islam-akash.png" alt="Official portrait of JaHiRuL isLaM AKASH - Islamic scholar and writer" className="logo" loading="lazy" />
              <div className="text-container" style={{marginLeft: '10px'}}>
                <h1 style={{color: '#ffffff', margin: 0, fontWeight: 700}}>JaHiRuL isLaM AKASH<span className="verified-badge" title="Verified"></span></h1>
                <p style={{color: '#ffffff', margin: 0}}>জহিরুল ইসলাম আকাশ</p>
              </div>
            </div>
          </a>
          <div className="social-menu-container" style={{display: 'flex', alignItems: 'center'}}>
            {/* Social Media Links */}
            <nav aria-label="Social media links">
              <div className="social-icons" style={{display: 'flex', alignItems: 'center'}}>
                <a href="https://web.facebook.com/jahirulislamAKASHoriginal" className="social-icon" style={{width: '36px', height: '36px', background: '#ffffff1f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px', color: 'white', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}} aria-label="Visit JaHiRuL isLaM AKASH's Facebook profile">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/jahirulislamaks" className="social-icon" style={{width: '36px', height: '36px', background: '#ffffff13', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px', color: 'white', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}} aria-label="Visit JaHiRuL isLaM AKASH's Twitter profile">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/jahirulislamakashofficial/" className="social-icon" style={{width: '36px', height: '36px', background: '#ffffff1e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px', color: 'white', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}} aria-label="Visit JaHiRuL isLaM AKASH's Instagram profile">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@jahirulislamakash" className="social-icon" style={{width: '36px', height: '36px', background: '#ffffff1e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 5px', color: 'white', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}} aria-label="Visit JaHiRuL isLaM AKASH's YouTube channel">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </nav>
            {/* Mobile Menu Toggle */}
            <button className="menu-icon" style={{fontSize: '24px', cursor: 'pointer', display: 'none', color: '#ffffff', marginLeft: '15px', background: 'none', border: 'none'}} aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileMenu">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <nav className="menu-bar" style={{background: 'linear-gradient(to right, rgb(184, 8, 75), rgb(204, 125, 7))', padding: '10px 0'}} aria-label="Main navigation">
        <ul>
          <li><a href="gallery.html">গ্যালারি</a></li>
          <li><a href="about.html">আমার সম্পর্কে</a></li>
          <li><a href="contact.html">যোগাযোগ</a></li>
          <li><a href="writing.html">চিন্তার খাতা</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
        <ul>
          <li><a href="gallery.html">গ্যালারি</a></li>
          <li><a href="about.html">আমার সম্পর্কে</a></li>
          <li><a href="contact.html">যোগাযোগ</a></li>
          <li><a href="writing.html">চিন্তার খাতা</a></li>
        </ul>
      </nav>
    </>
  );
};

export default MainContent;