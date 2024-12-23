export default function ContactForm(){

    return (

        <form className="flex flex-col gap-4">
            <div className="flex gap-4">
                <input 
                    type="text" 
                    required 
                    name="fname"
                    placeholder="First Name"
                    className="borde px-4 py-2 placeholder:text-white/80 text-white bg-white/30 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
                <input 
                    type="text" 
                    required 
                    name="lname"
                    placeholder="Last Name"
                    className=" px-4 py-2 placeholder:text-white/80 text-white bg-white/30 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
            </div>
            <input 
                type="text" 
                required 
                name="email"
                placeholder="Email"
                className=" px-4 py-2 placeholder:text-white/80 text-white bg-white/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
            />
            <input 
                type="number" 
                required 
                name="phone"
                placeholder="Phone No."
                className=" px-4 py-2 placeholder:text-white/80 text-white bg-white/30 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
            />
            <textarea 
                type="number" 
                required 
                name="message"
                placeholder="Message"
                rows={ 5 }
                className=" px-4 py-2 bg-white/30 placeholder:text-white/80 text-white rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button className="px-6 py-2 border-2 hover:bg-blue-500 text-white duration-300 border-white rounded-full w-fit font-medium font-sora">Submit</button>
        </form>

    )

}
