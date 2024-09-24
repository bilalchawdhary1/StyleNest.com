
const NewsLetterBox = () => {
    const onSubmitHandler = () =>{
        // Add your email validation and submission logic here
        event.preventDefault();
        console.log('Form submitted');
  
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">Join our list and save instantly on your first order!</p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" >
        <input type="email" placeholder="Enter your email address" className="w-full sm:flex-1 outline-none" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
