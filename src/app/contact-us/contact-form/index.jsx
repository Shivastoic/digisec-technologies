export default function ContactForm(){

    return (

        <form className="flex flex-col gap-4">
            <div className="flex gap-4">
                <input 
                    type="text" 
                    required 
                    name="fname"
                    placeholder="First Name"
                    className="border-2 px-4 py-2 border-neutral-400 placeholder:text-neutral-500 rounded-lg w-full"
                />
                <input 
                    type="text" 
                    required 
                    name="lname"
                    placeholder="Last Name"
                    className="border-2 px-4 py-2 border-neutral-400 placeholder:text-neutral-500 rounded-lg w-full"
                />
            </div>
            <input 
                type="text" 
                required 
                name="email"
                placeholder="Email"
                className="border-2 px-4 py-2 border-neutral-400 placeholder:text-neutral-500 rounded-lg"
            />
            <input 
                type="number" 
                required 
                name="phone"
                placeholder="Phone No."
                className="border-2 px-4 py-2 border-neutral-400 placeholder:text-neutral-500 rounded-lg"
            />
            <textarea 
                type="number" 
                required 
                name="message"
                placeholder="Message"
                rows={ 5 }
                className="border-2 px-4 py-2 border-neutral-400 placeholder:text-neutral-500 rounded-lg resize-none"
            />
            <button className="px-6 py-2 border-2 hover:bg-blue_light hover:text-white duration-300 border-blue_light text-blue_light rounded-full w-fit font-medium font-sora">Submit</button>
        </form>

    )

}
