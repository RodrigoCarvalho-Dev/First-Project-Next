
export default function Login() {
    return (
        <section className="text-2xl font-bold text-center w-screen h-screen flex items-center justify-center flex-col gap-10">
            <h1 className="text-4xl">Login</h1>
            <div className="gap-5 flex flex-col align-center justify-center text-center m-0 p-10 bg-gray-600">
                    <label htmlFor="input">
                        Email
                    </label>
                    <input type="text" 
                    id="input"
                    className="outline-none border-2 border-black bg-black"
                    />
                
                
                    <label htmlFor="input">
                        Password
                    </label>
                    <input type="text" 
                    id="input"
                    className="outline-none border-none bg-black"
                    />
            </div>
        </section>
    )
}