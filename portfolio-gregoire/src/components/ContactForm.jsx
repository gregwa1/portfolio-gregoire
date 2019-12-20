import React from 'react';


export default function ContactForm() {
  return (
    <div id="contact-form-area">
      <h1 id="contact-header" >Contact Me</h1>
      <form id="contact-form" action="https://formspree.io/mdoaavjv" method="POST">
        <label>
          Your name:
          <input className="form-input" type="text" name="name" ></input>
          </label>
    <label>
    Your email:
    <input type="text" name="_replyto"></input>
  </label>
          <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
    <button id="contact-form-button" type="submit" value="Send">send</button>
  </form>
    </div>
  )
}
