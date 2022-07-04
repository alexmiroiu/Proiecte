import styles from "./styles.module.scss";

const FormDemo = () => {
  return (
    <div className={styles.main}>
      <h1>Hello</h1>
      <form>
        <h2>Just a form full of imputs</h2>
        <div className={styles.input_container}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="sex">You are</label>
          <input type="radio" id="sex" name="sex" value="male"/>
          <input type="radio" id="sex" name="sex" value="female"/>
        </div>
      </form>
    </div>
  );
};

export default FormDemo;
