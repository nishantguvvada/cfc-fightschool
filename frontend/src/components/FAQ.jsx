import { useState } from "react";

export const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        console.log("hit")
        setOpenIndex(openIndex === index ? null : index);
        // setOpenIndex(!openIndex)
    };

    const faqs = [
        {
        question: "Are there any special discounts or early bird offers?",
        answer:
            "Yes! We offer limited-time early bird discounts and bundle packages for group registrations. Be sure to sign up early to grab the best deals.",
        },
        {
        question: "Is prior MMA experience required?",
        answer:
            "No prior experience is required. Our programs are designed for beginners as well as advanced practitioners.",
        },
        {
        question: "How much does it cost?",
        answer:
            "fightschool allows you to subscribe to your favourite instructor or team. The price will vary depending on the instructor/team.",
        },
        {
        question: "How do I subscribe?",
        answer:
            "Simply visit our official website and click the Register button at the top of the page. You’ll receive a confirmation email within minutes.",
        },
    ];

    return (
        <>
            <div className="max-w-4xl mx-auto p-4 h-screen mt-24">
                <div className="mb-4 border-b border-gray-300 pb-4">
                    <h2 className="text-2xl font-semibold text-slate-700 hover:text-[#acfcc3ff] transition delay-300 duration-300 ease-in-out cursor-pointer">Frequently Asked Questions</h2>
                </div>

                <div className="divide-y divide-gray-300">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="accordion" role="accordion">
                                <button type="button" onClick={() => toggleFAQ(index)} className="toggle-button cursor-pointer w-full text-base outline-none text-left font-medium py-6 text-slate-700 hover:text-[#26d66b] flex items-center">
                                    <span className="mr-4">{faq.question}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[14px] h-[14px] fill-current ml-auto shrink-0">
                                    <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                                    <path className={`${isOpen ? "plus hidden" : "plus"}`} d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z" />
                                    </svg>
                                </button>
                                <div className={`${isOpen ? "content pb-2 max-h-[1000px]": "content invisible max-h-0"} overflow-hidden transition-all duration-300`}>
                                    <p className="text-[15px] text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}