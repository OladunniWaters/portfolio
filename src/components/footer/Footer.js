import footerStyle from './Footer.module.scss';
import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
     <div className={footerStyle.footer}>
            <div className={footerStyle.footer_container}>
                <div class='col'>
                    <p className={footerStyle.copyright}>Designed & Developed by OladunniWaters .
                    </p>
                </div>
                <div class='col'>
                    <div className={footerStyle.footer_icons_container}>
                       <a className={footerStyle.footer_icons}  href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaGithub/></a>
                       <a className={footerStyle.footer_icons} href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaTwitter /></a>
                       <a className={footerStyle.footer_icons} href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                       <a className={footerStyle.footer_icons} href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Footer;