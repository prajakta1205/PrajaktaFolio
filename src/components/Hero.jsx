import { motion } from "framer-motion"
import profile from "../assets/IMG_1208.jpg"
import SocialLinks from "./SocialLinks"


export default function Hero() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
      className="relative flex min-h-[75vh] items-center px-20"
    >
      <div className="z-10 max-w-4xl">
      <h3 class="mb-3 text-sm font-medium uppercase  text-zinc-400 tracking-widest text-primary">
          Hello, I'm
        </h3>
        <div className="flex items-baseline gap-3">
  <h1 className="text-5xl md:text-6xl font-bold text-white">
    Prajakta W.
  </h1>

  {/* Verified Badge */}
  <span className="relative group inline-flex h-8 w-8 translate-y-1 z-50">

    {/* Rotating blue badge */}
    <span
    className="
      absolute bottom-full left-1/2 mb-2
      -translate-x-1/2
      rounded bg-black px-2 py-1
      text-xs text-white whitespace-nowrap
      opacity-0 scale-95
      transition-all duration-150
      group-hover:opacity-100 group-hover:scale-100
      pointer-events-none
      z-50
    "
  >
    Verified Developer
  </span>

    <svg
      viewBox="0 0 22 22"
      className="absolute inset-0 h-full w-full animate-[spin_6s_linear_infinite] drop-shadow-[0_0_6px_rgba(29,155,240,0.9)]
hover:[animation:spin_1.5s_linear] "
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.59896 18.2494L2.73438 17.6244C2.47396 17.5723 2.26562 17.4376 2.10937 17.2203C1.95312 17.0036 1.89236 16.765 1.92708 16.5046L2.21354 13.5619L0.260417 11.3223C0.0868056 11.1314 0 10.9057 0 10.6453C0 10.3848 0.0868056 10.1591 0.260417 9.96817L2.21354 7.72859L1.92708 4.78588C1.89236 4.52546 1.95312 4.28692 2.10937 4.07026C2.26562 3.85289 2.47396 3.71817 2.73438 3.66609L5.59896 3.04109L7.10937 0.489005C7.24826 0.263311 7.43924 0.115741 7.68229 0.0462962C7.92535 -0.0231483 8.1684 -0.0144674 8.41146 0.0723382L11.1198 1.21817L13.8281 0.0723382C14.0712 -0.0144674 14.3142 -0.0231483 14.5573 0.0462962C14.8003 0.115741 14.9913 0.263311 15.1302 0.489005L16.6406 3.04109L19.5052 3.66609C19.7656 3.71817 19.974 3.85289 20.1302 4.07026C20.2865 4.28692 20.3472 4.52546 20.3125 4.78588L20.026 7.72859L21.9792 9.96817C22.1528 10.1591 22.2396 10.3848 22.2396 10.6453C22.2396 10.9057 22.1528 11.1314 21.9792 11.3223L20.026 13.5619L20.3125 16.5046C20.3472 16.765 20.2865 17.0036 20.1302 17.2203C19.974 17.4376 19.7656 17.5723 19.5052 17.6244L16.6406 18.2494L15.1302 20.8015C14.9913 21.0272 14.8003 21.1748 14.5573 21.2442C14.3142 21.3137 14.0712 21.305 13.8281 21.2182L11.1198 20.0723L8.41146 21.2182C8.1684 21.305 7.92535 21.3137 7.68229 21.2442C7.43924 21.1748 7.24826 21.0272 7.10937 20.8015L5.59896 18.2494Z"
        fill="#1D9BF0"
      />
    </svg>

    {/* Static check mark */}
    <svg
      viewBox="0 0 22 22"
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.2 14.4L6.4 11.6L7.5 10.5L9.2 12.2L14.6 6.8L15.7 7.9L9.2 14.4Z"
        fill="white"
      />
    </svg>

  </span>
</div>


        <h2 className="mb-3 text-3xl text-zinc-400 tracking-widest text-primary">
          Full Stack Developer 
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-zinc-500">
          I build scalable backend systems, cloud-native APIs, and distributed
          architectures using .NET and Microsoft Azure.
          Proficient in building scalable and efficient backend systems using .NET with REST API for seamless integration.
          Proficient in scripting languages including JavaScript, React for front-end application development, micro front end application development.
        </p>
        
        <SocialLinks />

      </div>

      {/* BIG RIGHT PHOTO */}
      <motion.img
        src={profile}
        alt="Prajakta Wankhede"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          absolute right-[-120px] top-1/2 hidden
          h-[520px] w-[520px] -translate-y-1/2
          rounded-full object-cover
          border border-zinc-800
          shadow-[0_0_120px_rgba(255,255,255,0.08)]
          md:block
        "
      />
    </motion.section>
  )
}
