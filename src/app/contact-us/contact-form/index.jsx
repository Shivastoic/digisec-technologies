export default function ContactForm(){

    return (

        <form className="flex flex-col gap-4">
            <div className="flex gap-4">
                <input 
                    type="text" 
                    required 
                    name="fname"
                    placeholder="First Name"
                    className="border-2 border-white/20 px-4 py-2 placeholder:text-white/80 text-white bg-white/20 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
                <input 
                    type="text" 
                    required 
                    name="lname"
                    placeholder="Last Name"
                    className="border-2 border-white/20 px-4 py-2 placeholder:text-white/80 text-white bg-white/20 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-white"
                />
            </div>
            <input 
                type="text" 
                required 
                name="email"
                placeholder="Email"
                className="border-2 border-white/20 px-4 py-2 placeholder:text-white/80 text-white bg-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
            />
            <div className="flex gap-4">
                <input 
                    type="number" 
                    required 
                    name="phone"
                    placeholder="Phone No."
                    className="flex-1 border-2 border-white/20 px-4 py-2 placeholder:text-white/80 text-white bg-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
                />
                <select 
					name="Interested" 
					required
					className="flex-1 border-2 border-white/20 rounded-lg px-4 py-2 w-full bg-white/20 placeholder:text-white/80 text-white focus:outline-none focus:ring-1 focus:ring-white"
				>
					<option className='text-black' value="">Select Interest</option>
					<option className='text-black' value="Courses">Courses</option>
					<option className='text-black' value="Services">Services</option>
				</select>
            </div>
            <textarea 
                type="number" 
                required 
                name="message"
                placeholder="Message"
                rows={ 5 }
                className="border-2 border-white/20 px-4 py-2 bg-white/20 placeholder:text-white/80 text-white rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button className="px-6 py-2 border-2 hover:bg-blue-500 text-white duration-300 border-white rounded-full w-fit font-medium font-sora">Submit</button>
        </form>

    )

}
