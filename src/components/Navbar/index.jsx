import styles from "./nav.module.css"
import logo from "../../assets/logo.png"

const Navbar = ()=>{
    return(
        <>
         <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.input} >
                <input type="text" placeholder="    Any Place    |      Anywhere     |      Add Guest   " />
                {/* <button className={styles.icon}>&#128269;</button> */}
            </div>
            <div className={styles.switch}>Switch</div>
         </nav>
        </>
    )
}
export default Navbar