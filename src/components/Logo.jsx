import logoDesktop from "../assets/Logo-desktop.png";
import logoMobile from "../assets/Logo-mobile.png";

export const Logo = (props) => {
  return (
    <picture>
      <source media="(max-width: 991px)" srcSet={logoMobile} />
      <img src={logoDesktop} alt="" {...props} />
    </picture>
  );
};

export default Logo;
