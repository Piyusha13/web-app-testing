import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import NavTab from "../../components/NavTab/NavTab";
import user from "../../assets/bx_bxs-user.svg"
import mobile from "../../assets/contact-mobile-svgrepo-com.svg"
import "./NomineeDetails.style.css"
import location from "../../assets/location.svg";
import relationshipImg from "../../assets/relationship-img.svg";
import age from "../../assets/age.svg";
import { useState } from "react";
// import NomineeDetailsDiv from "../components/NomineeDetailsDiv";

const NomineeDetails = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 750px)",
    });
    const [dropdown, setDropdown] = useState(false);
    const [relation, setRelation] = useState("");

    return (
        < >
            {isMobile ? (
                <>
                    <div className="">
                        <div className='mob-nomineeDetails-container pt-3 px-4'>
                            <a href="/profile" >
                                <div className='header' >
                                    <i class="fa-solid fa-chevron-left"></i>
                                    <span className='px-2'>Nominee Details</span>
                                </div>
                            </a>
                            <div className='mob-nominee-input-section d-flex flex-column justify-content-between' >

                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Name</div>
                                    <div className='userImgDiv'>
                                        <img className='calenderIcon' src={user} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter name' type="name" />
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Mobile number</div>
                                    <div className='userImgDiv'>
                                        <img src={mobile} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter mobile number' type="name" />
                                    </div>
                                </div>
                                <div className='   nominee-desk-input-name-container'>
                                    <div className='input-title'>Age</div>
                                    <div className='userImgDiv'>
                                        <img className='calenderIcon' src={age} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter age' type="name" />
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Relationship</div>
                                    <div className='userImgDiv'>
                                        <img src={relationshipImg} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div d-flex flex-row justify-content-between w-100 align-items-center'>
                                        <input placeholder='Enter relationship type' onChange={(e) => { setRelation(e.target.value) }} value={relation} type="string" />
                                        <i onClick={() => { setDropdown(!dropdown); }} class={dropdown ? "cursor-pointer px-2 fa-solid fa-chevron-up" : "cursor-pointer px-2 fa-solid fa-chevron-down"} ></i>
                                        {dropdown && (
                                            <div className="dropdown-div bg-dark position-absolute top-100 w-75 text-white d-flex flex-column justify-content-start align-items-start">
                                                <div className="dropdown-options" onClick={() => { setRelation("Father") }} >Father</div>
                                                <div className="dropdown-options" onClick={() => { setRelation("Mother") }}>Mother</div>
                                                <div className="dropdown-options" onClick={() => { setRelation("Brother") }}>Brother</div>
                                                <div className="dropdown-options border-none" onClick={() => { setRelation("Sister") }}>Sister</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Address</div>
                                    <div className='userImgDiv'>
                                        <img src={location} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter address' type="name" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='update-button-div d-flex justify-content-center bg-dark'>
                            <div className={relation ? 'proceed-update my-2' : 'update-button my-2 '}>Update</div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="container-xxl">
                    <Navbar />
                    <div className='row mt-5'>
                        <div className='col-2'>
                            <NavTab />
                        </div>
                        <div className='nomineeDetails-container col'>
                            <a href="/profile" >
                                <div className='header' >
                                    <i class="fa-solid fa-chevron-left"></i>
                                    <span className='px-2'>Nominee Details</span>
                                </div>
                            </a>
                            <div className='nominee-input-section d-flex flex-column justify-content-between' >

                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Name</div>
                                    <div className='userImgDiv'>
                                        <img className='calenderIcon' src={user} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter name' type="name" />
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Mobile number</div>
                                    <div className='userImgDiv'>
                                        <img src={mobile} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter mobile number' type="number" />
                                    </div>
                                </div>
                                <div className='   nominee-desk-input-name-container'>
                                    <div className='input-title'>Age</div>
                                    <div className='userImgDiv'>
                                        <img className='calenderIcon' src={age} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter age' type="number" />
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Relationship</div>
                                    <div className='userImgDiv'>
                                        <img src={relationshipImg} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div d-flex flex-row justify-content-between w-100 align-items-center'>
                                        <input placeholder='Enter relationship type' onChange={(e) => { setRelation(e.target.value) }} value={relation} type="string" />
                                        <i onClick={() => { setDropdown(!dropdown); }} class={dropdown ? "cursor-pointer px-2 fa-solid fa-chevron-up" : "cursor-pointer px-2 fa-solid fa-chevron-down"} ></i>
                                        {dropdown && (
                                            <div className="dropdown-div bg-dark position-absolute top-100 w-75 text-white d-flex flex-column justify-content-start align-items-start">
                                                <div className="dropdown-options" onClick={() => { setRelation("Father") }} >Father</div>
                                                <div className="dropdown-options" onClick={() => { setRelation("Mother") }}>Mother</div>
                                                <div className="dropdown-options" onClick={() => { setRelation("Brother") }}>Brother</div>
                                                <div className="dropdown-options border-none" onClick={() => { setRelation("Sister") }}>Sister</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className=' nominee-desk-input-name-container'>
                                    <div className='input-title'>Address</div>
                                    <div className='userImgDiv'>
                                        <img src={location} alt="userImg" />
                                    </div>
                                    <div className='profile-input-div'>
                                        <input placeholder='Enter address' type="address" />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className={relation ? 'proceed-update my-2' : 'update-button my-2 '}>Update</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    )
}
export default NomineeDetails;