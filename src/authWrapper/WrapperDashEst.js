import { Link } from 'react-router-dom';
import styles from './wrapperDashEst.module.css'
function WrapperDashEst(props) {
  return (
    <div style={{minHeight:"600px",minWidth:"1000px",overflow:"hidden",height:"100vh",position:"relative"}}
    >
      
     <div className={styles.backImg}>
     </div>

      <div className={styles.foreground}>

      <div className="flex  flex-col z-20 justify-center mt-10 text-lg text-white" style={{height:"100%"}}>
        <img
          loading="lazy"
          src="/images/completeProfile/barooom.png"
          className="self-center max-w-full aspect-[1.3] w-[150px]"
        />
        <div className="flex gap-5 mt-10 justify-between px-5  whitespace-nowrap">
          <img
            loading="lazy"
          src="/images/completeProfile/smallDash.png"
            className="shrink-0 w-6 aspect-square"
          />

          <Link to={"/CurrentGigsEstablishment"} className="flex-auto">Dashboard</Link>
        </div>

        <div className="flex gap-5 justify-between px-5 mt-7 whitespace-nowrap">
          <img
            loading="lazy"
            src="/images/completeProfile/celenderDash.png"
            className="shrink-0 w-6 aspect-square"
          />
          <Link to={"/CelenderEst"} className="flex-auto">Calendar</Link>
        </div>

        <div className="flex gap-5 justify-between px-5 mt-7">
          <img
            loading="lazy"
            src="/images/completeProfile/earning.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto whitespace-nowrap tracking-tight">Earnings & Payment</div>
        </div>

        <div className="flex gap-5 justify-between px-5 mt-7 whitespace-nowrap">
          <img
            loading="lazy"
            src="/images/completeProfile/community.png"
            className="shrink-0 self-start w-5 aspect-[1.25]"
          />
          <div className="flex-auto">Community</div>
        </div>
        <div className="flex gap-5 justify-between px-5 mt-7 whitespace-nowrap">
          <img
            loading="lazy"
            src="/images/subscription.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Subscription Plans</div>
        </div>
        <div className="flex gap-5 justify-between px-5 mt-7 whitespace-nowrap">
          <img
            loading="lazy"
            src="/images/completeProfile/reviewDash.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Reviews</div>
        </div>

        <div className="flex gap-5 justify-between px-5 mt-7">
          <img
            loading="lazy"
            src="/images/completeProfile/referDash.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Refer A Friend</div>
        </div>

        <div className="flex gap-5 justify-between px-5 mt-7 whitespace-nowrap">
          <img
            loading="lazy"
            src="/images/completeProfile/chat.png"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="flex-auto my-auto">Chat</div>
        </div>


      </div>
      <div className={styles.box}>
        <div className={styles.dashboardcontainer}>
          {props.children}
        </div>
        <div className={styles.boxFooter}>

          <div>
              <p>copyright &copy; Baroom</p>
          </div>

          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>
      </div>

      </div>
    </div>   
  );

} export default WrapperDashEst;