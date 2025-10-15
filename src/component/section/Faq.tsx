import FAQComp from "../ui/FaqComp"


const faq = [
    {
        question: "Is MeetMux free to use?",
        ans: "Yes! MeetMux is completely free to download and use. All features are available to everyone at no cost."
    },
    {
        question: "How does the verification system work?",
        ans: "Our AI-powered verification system uses selfie matching technology to ensure users are authentic. You'll take a real-time selfie that's compared to your profile photo using advanced facial recognition."
    },
    {
        question: "Who can join MeetMux?",
        ans: "MeetMux is open to anyone aged 18 and above who wants to make meaningful connections through shared activities. We welcome people from all backgrounds and interests."
    },
    {
        question: "How do I stay safe while meeting new people?",
        ans: "MeetMux helps you make safer, smarter connections by showing each user's Social Score and feedback, giving insight into their trustworthiness. You can also view their Activity History to see if they genuinely share your interests, making it easier to connect with like-minded people."
    },
    {
        question: "Can I use MeetMux in my city?",
        ans: "MeetMux is currently available in major cities across the India and expanding globally. Check the app store to see if we're available in your area, or join our waitlist for updates."
    },

]

const FAQ = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-20 w-full px-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                Frequently asked questions

            </h2>

            <div className="w-full">
                {faq.map((item, index) => (
                    <FAQComp key={index} question={item.question} ans={item.ans} />
                ))}
            </div>

        </div>
    )
}

export default FAQ