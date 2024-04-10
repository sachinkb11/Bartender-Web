import style from './wrapperEst.module.css'
export default function WrapperEst(props) {
    return (
        <>
            <div className={style.container}>

                {/* <div className={style.innerForeGround}> */}
                {/* <div className={style.upperImg}>
                        <img src='./images/barooom.png'/>
                    </div> */}
                <div className={style.dashboardcontainer}>
                    <div className={style.upperImg}>
                        <img src='./images/barooom.png' />
                    </div>
                    {props.children}</div>
                {/* </div> */}
            </div>
        </>
    );
}