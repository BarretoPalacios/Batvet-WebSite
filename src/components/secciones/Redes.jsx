import AnimateBox from "../animaciones/AnimateBox";
import BotonRedes from "../botones/BotonRedes";

// ICONOOS
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

function Redes() {
  return (
    <AnimateBox direction="zoom">
      <div className="section-redes">
        <BotonRedes href={"/"}>
          <IconBrandFacebook stroke={2} size={50} />
        </BotonRedes>
        <BotonRedes href={"/"}>
          <IconBrandInstagram stroke={2} size={50} />
        </BotonRedes>
        <BotonRedes href={"/"}>
          <IconBrandTiktok stroke={2} size={50} />
        </BotonRedes>
      </div>{" "}
    </AnimateBox>
  );
}

export default Redes;
