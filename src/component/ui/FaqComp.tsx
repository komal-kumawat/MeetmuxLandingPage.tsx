import { useState } from "react";

interface IFAQ {
    question: string;
    ans: string;
}
const FAQComp = ({ question, ans }: IFAQ) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4 bg-gray-200 rounded-lg w-full text-sm p-5 my-5">
            <div onClick={()=>setOpen(!open)} className="">{question}</div>
            {open &&
                <div className="text-gray-600">{ans}</div>
            }


        </div>
    )
}

export default FAQComp