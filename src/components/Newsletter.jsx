import { FaRegNewspaper } from "react-icons/fa";
import { RiSpamLine } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 mt-10">
      
      <div 
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 transform-gpu blur-3xl"
      >
        <div 
          className="aspect-[1155/678] w-[72rem] rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 opacity-20"
        ></div>
      </div>
      
      <div 
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 -z-10 transform-gpu blur-3xl"
      >
        <div 
          className="aspect-[1155/678] w-[72rem] rounded-full bg-gradient-to-tl from-cyan-500 to-purple-600 opacity-20"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Join Our Gaming Community
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Get the latest news on indie games, exclusive updates, and community highlights delivered straight to your inbox. Don't miss out on the next big hit!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              >
                Subscribe
              </button>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:pt-2">
            
            <div className="flex flex-col items-start bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20">
                <FaRegNewspaper className="text-purple-400 w-6 h-6" />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Exclusive Content
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Receive developer interviews, behind-the-scenes looks, and early access to game demos.
              </dd>
            </div>
            
            <div className="flex flex-col items-start bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
              <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/20">
                <RiSpamLine className="text-purple-400 w-6 h-6" />
              </div>
              <dt className="mt-4 font-semibold text-white">
                No Spam, Ever
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                We respect your inbox. You'll only get updates that matter, and you can unsubscribe anytime.
              </dd>
            </div>

          </dl>
          
        </div>
      </div>
    </div>
  );
};

export default Newsletter;