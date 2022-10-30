import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from '../../components/modal';
import SignUpForm from '../../components/signUpForm';
import { ValidateMember } from '../../validation/validateMember';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({});
    const [error, setE] = useState({});
    const [activeIndex, setActiveIndex] = useState();
    // const [memberRecord, setMemberRecord]= useState([]);

    
    // Delete Member
    const handleDelete = (items) => {
        const removedMember = members.filter((e) => e.email !== items.email);
        setMembers(removedMember);
        const memberList = JSON.stringify(removedMember)
        localStorage.setItem('memberArr', memberList);
    }
    // Code for Modal Window

    // Input value change and store
    const onChangeHandler = (e) => {
        setInput({ ...input, [`${e.target.name}`]: e.target.value })
    }
    // Change select value
    const handleChangeSelect = (e) => {
        setInput({ ...input, country: e.target.value })
    }
    // Register function
    const handleRegister = () => {
        let index = members.indexOf("asdsa@gmail.com");
        if (index > -1) {
            alert("This email already exist! Please use different email id.");
            return;
        }
        const validate = ValidateMember(input);
        if (!validate.success) {
            setE(validate.error)
        } else {
            members[activeIndex] = input;
            localStorage.setItem('memberArr', JSON.stringify(members));
            setInput({});
            setShowModal(false);
            setE(0);
        }
    }
    // Edit Member Detail
    const handleEdit = (item, index) => {
        setShowModal(true);
        setInput(item);
        setActiveIndex(index);
    }
    // Modal Close
    const closeModal = () => {
        setShowModal(false);
    }
    useEffect(() => {
        const memberArr = JSON.parse(localStorage.getItem('memberArr'));
        setMembers(memberArr);
    }, []);

    return (
        <div className="">
            {/* Modal */}
            <Modal showModal={showModal} closeModal={closeModal} handleRegister={handleRegister} buttonName="Update" header="Update User Details" >
                <SignUpForm  error={error} input={input} onChangeHandler={onChangeHandler} handleChangeSelect={handleChangeSelect} />
            </Modal>

            <h1 className="font-bold border-b border-gray-400 mb-4 pb-1 text-lg">Member List</h1>

            {
                members.length ? <div className="grid grid-cols-3 gap-4">{
                    members.map((items, index) => {
                        return (
                            <div className="border border-gray-400 px-4 pb-4 rounded flex overflow-hidden" key={index}>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className='col-span-12'>
                                        <div className="bg-gray-200 font-bold -mx-4 py-2 px-4 border-b border-gray-400 flex items-center">
                                            {/* Member Name */}
                                            <h1>{items.username}</h1>
                                            {/* Action icons */}
                                            <span className='flex ml-auto'>
                                                {/* Edit icon */}
                                                <Link to='#' className='hover:text-indigo-600' onClick={() => handleEdit(items, index)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                    </svg>
                                                </Link>
                                                {/* Trash icon */}
                                                <Link to='#' className='pl-2 hover:text-indigo-600' onClick={() => handleDelete(items)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                    {/* Avatar */}
                                    <div className="overflow-hidden relative w-20 h-20 bg-gray-100 rounded-full dark:bg-gray-600 p-4">
                                        {
                                            (items.avatar ? <img src={items.avatar} alt={items.username} className="w-20 h-20" /> : <svg className="absolute -left-2 -top-0 w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>)
                                        }
                                    </div>
                                    {/* Member Information */}
                                    <div className="text-gray-600 pl-2 col-span-10">
                                        {/* Member Email */}
                                        <p className="flex items-center text-gray-500 pt-1">
                                            <label className="mt-px"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            </label>
                                            <span className="pl-2">{items.email}</span>
                                        </p>
                                        {/* Member Phone */}
                                        <p className="flex items-center text-gray-500 pt-1">
                                            <label className="mt-px"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            </label>
                                            <span className="pl-2">{items.phone}</span>
                                        </p>
                                        {/* Member Country */}
                                        <p className="flex items-center text-gray-500 pt-1">
                                            <label className="mt-px">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>

                                            </label>
                                            <span className="pl-2">{items.country}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}</div> : <div className="grid gap-4"><div className='border border-red-400 text-center rounded p-4 grid-col text-gray-600'>No record! Please register a member <Link className='text-blue-800 hover:text-blue-900' to="/signup">Sign up</Link>.</div> </div>

            }
        </div>

    )
}

export default MemberList;