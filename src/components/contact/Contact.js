import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';
import contactStyle from './Contact.module.scss';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

function Contact() {
  return (
    <>
    <Navbar />
    <div className={contactStyle.contact_container}>
        <div className={contactStyle.contactBox_container}>
             <div className={contactStyle.contact_box1}></div>
                <h1 className={contactStyle.contact_header}>CONTACT ME</h1>
             <div className={contactStyle.contact_box2}></div>
         </div> 
    
      <form action="https://formsubmit.oladunniwaters@gmail.com" method="POST" className={contactStyle.form}>
           <div className={contactStyle.contact_labelbox}>
                <label for="exampleFormControlInput1" class="form-label" className={contactStyle.contact_label}>NAME</label>
                 <input type="text" name="name" required className={contactStyle.contact_name}/>
           </div> 
           
           <div className={contactStyle.contact_labelbox}>
               <label for="exampleFormControlInput1" class="form-label" className={contactStyle.contact_label}>EMAIL</label>
                <input type="email" name="email" required className={contactStyle.contact_email}/>
           </div> 
           
           <div className={contactStyle.contact_labelbox}>
                <label for="exampleFormControlTextarea1" class="form-label" className={contactStyle.contact_label_text}>CONTENT</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" className={contactStyle.contact_textarea}></textarea>
           </div>     
           <button type="submit" className={contactStyle.contact_btn}>Send</button>
      </form>
      
    </div>
    <Footer />
    </>
  );
}

export default Contact;