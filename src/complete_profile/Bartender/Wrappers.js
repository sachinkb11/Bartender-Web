import styles from './wrappers.module.css'
function Wrappers(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.upperImg}>
                    <img src='./images/completeProfile/upper_img.png' />
                </div>
                <div className={styles.box}>

                    <div className={styles.dashboardcontainer}>
                        {props.children}</div>
                </div>
            </div>
        </>
    );

} export default Wrappers;