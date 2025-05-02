import { PulseLoader } from "react-spinners";
import placeholder from "../../../assets/img/cat.png";
import styles from "./imagecontainer.module.scss";

interface ImageContainerProps {
  src?: string;
  alt?: string;
  loading?: boolean;
}

export const ImageContainer = ({
  src,
  alt = "Cat image",
  loading = false,
}: ImageContainerProps) => {
  return (
    <div className={styles.imageContainer}>
      {loading ? (
        <div className={styles.loaderWrapper}>
          <PulseLoader color="#005eac" size={12} />
        </div>
      ) : (
        <img className={styles.image} src={src || placeholder} alt={alt} />
      )}
    </div>
  );
};
