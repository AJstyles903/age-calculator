import React, { useState } from 'react';
import Button from "../assets/images/icon-arrow.svg";
import { intervalToDuration } from 'date-fns';

const Main = () => {
    const [birthDay, setBirthDay] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [show, setShow] = useState();

    let today = new Date();
    const calculateAge = () => {
        const { years, months, days } = intervalToDuration({
            start: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            end: new Date(birthYear, birthMonth, birthDay)
        });
        return { years, months, days };
    }

    const Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const isInvalidDate =
        birthDay > 31 ||
        birthMonth > 12 ||
        birthYear > today.getFullYear() ||
        (birthDay === "" && birthMonth === "" && birthYear === "") ||
        (birthDay !== "" && birthMonth === "" && birthYear === "") ||
        (birthDay === "" && birthMonth !== "" && birthYear === "") ||
        (birthDay === "" && birthMonth === "" && birthYear !== "") ||
        (birthDay !== "" && birthMonth !== "" && birthYear === "") ||
        (birthDay === "" && birthMonth !== "" && birthYear !== "") ||
        (birthDay !== "" && birthMonth === "" && birthYear !== "");
    return (
        <>
            <div className='w-full h-[100vh] bg-[#f0f0f0] flex flex-row justify-center items-center'>
                <div className='w-full md:w-[45vw] py-8 px-5 mx-6 shadow-md rounded-br-[9rem] rounded-2xl bg-white'>
                    <ul className='flex flex-row gap-x-4 font-poppins-bold'>
                        <li className='flex flex-col'>
                            <label htmlFor='forday' className={`text-[8px] md:text-[12px] ${(show === false && birthDay === "") || birthDay > 31 || Months[birthMonth - 1] < birthDay ? "text-[#ff5757]" : "text-[#716f6f]"} tracking-[2px]`}>DAY</label>
                            <input
                                className={`text-md md:text-3xl text-[#141414] w-20 md:w-32 outline-none mt-1 md:mt-2 border rounded-md p-2 md:p-4 ${(show === false && birthDay === "") || birthDay > 31 || Months[birthMonth - 1] < birthDay ? "border-[#ff5757]" : "border-[#dbdbdb] focus:border-[#854dff]"}`}
                                type="number"
                                name='forday'
                                onChange={(event) => { setBirthDay(event.target.value) }}
                                value={birthDay}
                                placeholder='DD'
                                min={1}
                                max={31}
                            />
                            {show === false && birthDay === "" ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>this field is required</p> : ""}
                            {birthDay > 31 ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>must be a valid day</p> : ""}
                            {Months[birthMonth - 1] < birthDay ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>must be a valid date</p> : ""}
                        </li>
                        <li className='flex flex-col'>
                            <label htmlFor='formonth' className={`text-[8px] md:text-[12px] ${(show === false && birthMonth === "") || birthMonth > 12 || Months[birthMonth - 1] < birthDay ? "text-[#ff5757]" : "text-[#716f6f]"} tracking-[2px]`}>MONTH</label>
                            <input className={`text-md md:text-3xl text-[#141414] w-20 md:w-32 outline-none mt-1 md:mt-2 border rounded-md p-2 md:p-4 ${(show === false && birthMonth === "") || birthMonth > 12 || Months[birthMonth - 1] < birthDay ? "border-[#ff5757]" : "border-[#dbdbdb] focus:border-[#854dff]"}`}
                                type="number"
                                name='formonth'
                                onChange={(event) => { setBirthMonth(event.target.value) }}
                                value={birthMonth}
                                placeholder='MM'
                                min={1}
                                max={12}
                            />
                            {show === false && birthMonth === "" ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>this field is required</p> : ""}
                            {birthMonth > 12 ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>must be a valid month</p> : ""}
                        </li>
                        <li className='flex flex-col'>
                            <label htmlFor='foryear' className={`text-[8px] md:text-[12px] ${(show === false && birthYear === "") || birthYear > today.getFullYear() || Months[birthMonth - 1] < birthDay ? "text-[#ff5757]" : "text-[#716f6f]"} tracking-[2px]`}>YEAR</label>
                            <input className={`text-md md:text-3xl text-[#141414] w-20 md:w-32 outline-none mt-1 md:mt-2 border rounded-md p-2 md:p-4 ${(show === false && birthYear === "") || birthYear > today.getFullYear() || Months[birthMonth - 1] < birthDay ? "focus:border-[#ff5757] border-[#ff5757]" : "border-[#dbdbdb] focus:border-[#854dff]"}`}
                                type="number"
                                name='foryear'
                                onChange={(event) => { setBirthYear(event.target.value) }}
                                value={birthYear}
                                placeholder='YYYY'
                                min={0}
                                max={today.getFullYear()}
                            />
                            {show === false && birthYear === "" ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>this field is required</p> : ""}
                            {birthYear > today.getFullYear() ? <p className='text-[#ff5757] text-[7px] md:text-[12px] my-1 md:my-2'>must be in the past</p> : ""}
                        </li>
                    </ul>
                    <div className='flex flex-row items-center justify-center my-4 md:my-1'>
                        <hr className='w-full border border-[#dbdbdb] flex-1' />
                        <img
                            className='bg-[#854dff] hover:bg-[#141414] rounded-full p-3 md:p-4 cursor-pointer w-12 md:w-16'
                            src={Button}
                            alt="button"
                            onClick={isInvalidDate ? ()=> setShow(false) : () => setShow(true)}
                        />
                        <hr className='w-full md:max-w-0 border border-[#dbdbdb] flex-1' />
                    </div>
                    <ul className='font-poppins-bold-italic text-5xl md:text-8xl italic text-[#141414]'>
                        <li>
                            <h1><span className='text-[#854dff]'>{show === true && birthYear !== "" ? calculateAge().years : "--"}</span>years</h1>
                        </li>
                        <li>
                            <h1><span className='text-[#854dff]'>{show === true && birthMonth !== "" ? calculateAge().months : "--"}</span>months</h1>
                        </li>
                        <li>
                            <h1><span className='text-[#854dff]'>{show === true && birthDay !== "" ? calculateAge().days : "--"}</span>days</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Main;