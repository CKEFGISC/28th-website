import "./Footer.scss";
import Brand from "./components/Brand";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copyright"><small>Copyright © {new Date().getFullYear()} CKEFGISC 建北電資 28th</small></div>
      <div className="footer-brands">
        <Brand 
          title="建中電研 43rd Instagram"
          href="https://www.instagram.com/ckeisc_43rd/"
          brandName="instagram"
        />
        <Brand 
          title="北一資研 37th Instagram"
          href="https://www.instagram.com/fgisc37th/"
          brandName="instagram"
        />
        <Brand 
          title="建北電資 28th GitHub"
          href="https://github.com/ckefgisc-28th/"
          brandName="github"
        />
        <Brand 
          title="建北電資 28th Email"
          href="mailto://ckefgisc28th@gmail.com"
          brandSeries="regular"
          brandName="envelope"
          brandSize="lg"
        />
        <Brand 
          title="建北電資 28th Email"
          href="https://www.youtube.com/watch?v=klfT41uZniI"
          brandSeries="solid"
          brandName="info"
          brandSize="lg"
        />
      </div>
    </footer>
  );
}