
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styleFt.css';

export const Footer = () => {
  return (
    <footer>
        <div className="div-acercade">
          <div className="info logo separador">
            <img src="https://img0.didiglobal.com/static/soda_static/c/homepage/img/8ae881e.svg" />
            {/* <p>LogoEmp</p> */}
          </div>
          
          <ul className="info separador">
            <li><h3 className="titleUl">Encuentranos</h3></li>
            <li>Av. 1 Este #18-74, Los Caobos</li>
            <li><a href="#">Acerca de Name Restaurant</a></li>
          </ul>

          <ul className="info">
            <li><h3 className="titleUl">Información de la empresa</h3></li>
            <li><a href="#">Politica y privacidad</a></li>
            <li><a href="#">Centro de ayuda</a></li>
          </ul>
        </div>

        <div className="div-iconos">
          <a href=""><FacebookIcon /></a>
          <a href=""><InstagramIcon /></a>
          <a href=""><WhatsAppIcon /></a>
        </div>      
    </footer>
  )
}
