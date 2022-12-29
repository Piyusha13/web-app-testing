import cancel from "../../assets/Cancel.svg"
import qr_code from "../../assets/qr_code.png"
import "./PaymentMethod.style.css"
import copy from "../../assets/Copy.svg"
import g_pay from "../../assets/G_pay.png"
import phonpe from "../../assets/Phonpe.png"
import UPI from "../../assets/UPI.png"
import paytm from "../../assets/Paytm.png"

const PaymentMethod2 = () => {
    return (
        <>
            <div className="popup-bg d-flex justify-content-center align-items-center">
                <div className="Payment-method1-popup text-white ">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div>Pay through BHIM/UPI</div>
                        <a href="/wallet">
                            <img src={cancel} alt="cancel" />
                        </a>
                    </div>
                    <div className="QRcode-section w-100 d-flex flex-column align-items-center" >
                        <div>
                            <p>Scan the QR code</p>
                            <p>to transfer</p>
                        </div>
                        <img src={qr_code} alt="qr-code" />
                        <div className="px-2 button-2-wrapper w-75 d-flex flex-row ">
                            <button className="qr-code-download" >Download</button>
                            <button className="qr-code-share">Share</button>
                        </div>
                    </div>
                    <div className="upi-div py-2 d-flex flex-row align-items-end  justify-content-between ">
                        <div className="text-left">
                            <div className="fw-semibold" >UPI ID</div>
                            <div className="fs-8">9406925976@XYZ</div>
                        </div>
                        <img className="copy-upi-img" src={copy} alt="copy" />
                    </div>
                    <div>OR</div>
                    <div>
                        <div className="text-left fw-semibold " >Choose Pyment Mode</div>
                        <div className=" px-4  d-flex flex-row justify-content-between ">
                            <img className="payment-mode-img" src={paytm} alt="gpay" />
                            <img className="payment-mode-img" src={phonpe} alt="gpay" />
                            <img className="payment-mode-img" src={g_pay} alt="gpay" />
                            <img className="payment-mode-img" src={UPI} alt="gpay" />
                        </div>
                    </div>
                </div>
            </div></>
    )
}
export default PaymentMethod2;
