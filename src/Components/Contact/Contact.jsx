import React from 'react'
import './Contact.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "303dc6ef-fb99-4274-948c-9168aef8348d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
 

  return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
  );
}

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src="/theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Ready to bring your vision to life? Let's chat.
Let's build something amazing together. Contact me today.
Have a project in mind? Let's discuss your goals.

</p>
          <div className="contact-details">
            <div className="contact-detail">
            <img src="/mail_icon.svg" alt="" /><p>sharjeelajmalg786@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src="/call_icon.svg" alt="" /><p>+92 309 6530 326</p>
            </div>
            <div className="contact-detail">
           <img src="/location_icon.svg" alt="" /><p>Fareed Town, Sahiwal</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder='Enter Your Email' name='email' />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message"  rows="8" placeholder='Enter Your Meassage'> </textarea>
          <button className='contact-submit'>Submit Now   </button>
       
        </form>
      </div>
    </div>
  )
}

export default Contact