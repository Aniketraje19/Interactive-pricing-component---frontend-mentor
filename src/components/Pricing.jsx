"use client";
import { useState } from "react";
import { Range } from "@/components/Range";


export const Pricing = () => {

    const [value, setValue] = useState(0)
    const [yearlyBill, setYearlyBill] = useState(false)
    const prices_per_views = [
        { views: "10K", price: 8 },
        { views: "50K", price: 12 },
        { views: "100K", price: 16 },
        { views: "500K", price: 24 },
        { views: "1M", price: 36 },
    ];

    const getPrice = (price) => {
        if(!yearlyBill) return price
        return price - (price * 0.25)
    }

    return (
        <div className="bg-white p-8 m-2 rounded-lg shadow-box xs:p-4 xs:m-10 dark:bg-black dark:shadow-box-dark">
            <div className="flex justify-between items-center py-8">
                <span className="text-grayish-blue tracking-wider font-semibold dark:text-soft-cyan">{prices_per_views[value].views} PAGEVIEWS</span>
                <span className="text-grayish-blue flex items-center font-semibold dark:text-soft-cyan"><span className="text-dark-blue text-4xl font-bold m-2 dark:text-strong-cyan">${getPrice(prices_per_views[value].price).toFixed(2)}</span>/{yearlyBill ? 'year' : 'month'}</span>
            </div>
            <Range length={prices_per_views.length - 1} value={value} setValue={setValue} />
            <div className="my-10 ml-20 flex justify-end items-center text-grayish-blue dark:text-soft-cyan font-medium xs:ml-1">
                <span className="mx-2">Monthly Billing</span>
                <div className="relative w-12 mx-1">
                    <input type="checkbox" className="checkbox" value={yearlyBill} onChange={e => setYearlyBill(prev => !prev)} />
                    <span className="slide rounded-xl"></span>
                </div>
                <span className="mx-2">Yearly Billing</span>
                <span className="bg-light-grayish-red dark:bg-soft-cyan dark:text-black px-2 py-1 text-xs rounded-xl">25% <span className="xs:hidden">discount</span></span>
            </div>

            <div className="border-t-2 border-t-soft-cyan flex justify-around items-center py-12 xs:flex-col">
                <ul className="check-icons text-grayish-blue font-medium m-2">
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>
                <button className="hover:text-white bg-dark-blue text-pale-blue px-12 py-4 rounded-full">
                    Start my trial
                </button>
            </div>

        </div>
    )
}