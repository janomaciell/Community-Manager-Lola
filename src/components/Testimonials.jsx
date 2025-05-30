import React from 'react';
import '../styles/components/Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-video-section">
      <video
        className="testimonials-video"
        src="/images/copy_6C0304E4-8FFF-4080-8D7A-B8AF15186BA7.MOV"
        
        autoPlay
        loop
        muted
      />
    </section>
  );
}

export default Testimonials;
