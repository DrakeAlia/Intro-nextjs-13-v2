import styles from "./button.module.css";

interface Button {
  variant: string;
}

const Button = ({ variant }: Button) => {
  return <div className={styles.button}>Click</div>;
};

export default Button;
