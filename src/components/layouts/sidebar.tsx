'use client'

import {usePathname} from "next/navigation";
import {PiCardsLight, PiClockCountdown} from "react-icons/pi";
import {RiDropdownList} from "react-icons/ri";
import {GrToast} from "react-icons/gr";
import {
  MdOutlineHowToVote,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineTextFields
} from "react-icons/md";
import {clsx} from "clsx";
import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import {TfiLayoutAccordionMerged} from "react-icons/tfi";
import {RxDropdownMenu} from "react-icons/rx";
import {CiLink} from "react-icons/ci";
import {ImDrawer} from "react-icons/im";
import {BiCarousel} from "react-icons/bi";
import {SiBigbluebutton} from "react-icons/si";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true)

  const sidebarLinks = [
    {
      label: "Accordion",
      href: `/accordion`,
      icon: (
        <TfiLayoutAccordionMerged className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Button",
      href: `/button`,
      icon: (
        <SiBigbluebutton className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Card",
      href: `/card`,
      icon: (
        <PiCardsLight className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Carousel",
      href: `/carousel`,
      icon: (
        <BiCarousel className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Countdown",
      href: `/countdown`,
      icon: (
        <PiClockCountdown className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Drawer",
      href: `/drawer`,
      icon: (
        <ImDrawer className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Dropdown Menu",
      href: `/dropdown`,
      icon: (
        <RxDropdownMenu className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Link",
      href: `/link`,
      icon: (
        <CiLink className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Modal",
      href: `/modal`,
      icon: (
        <RiDropdownList className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Text",
      href: `/text`,
      icon: (
        <MdOutlineTextFields className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Toast",
      href: `/toast`,
      icon: (
        <GrToast className={"w-6 h-6"}/>
      ),
    },
    {
      label: "Vote",
      href: `/vote`,
      icon: (
        <MdOutlineHowToVote className={"w-6 h-6"}/>
      ),
    },
  ]

  return (
    <motion.div
      animate={{
        width: open ? "288px" : "80px",
      }}
      className={clsx("flex flex-col justify-between border-r-[1px] border-solid border-white/[0.2] pb-4", {
        "px-3": open,
      })}>
      <div className={"flex flex-col space-y-4"}>
        <div className={"p-4 border-b-[1px] border-solid border-white/[0.2]"}>
          <motion.h1 className={"text-[28px] font-bold p-1 transition duration-150 text-[#C0C0C0]"}>
            {open ? "Solijoniy" : "SJ"}
           </motion.h1>
        </div>
        <div className={"flex flex-col space-y-1"}>
          {sidebarLinks.map((link) => (
            <Link href={link.href} key={link.label}
                  className={clsx("text-[#C0C0C0] flex items-center justify-between py-2 px-3 rounded-md hover:bg-white/[0.1] cursor-pointer", {
                    "bg-white/[0.1] border-solid border-r-[6px] border-white/[0.5]": pathname === link.href,
                    "mx-3": !open,
                  })}>
              <div className={"flex gap-x-3 items-center"}>
                <div className={"relative"}>
                  {link.icon}
                  {/*{link.badge && (*/}
                  {/*  <Badge*/}
                  {/*    className={clsx(*/}
                  {/*      {*/}
                  {/*        "rounded-full py-0 px-1 absolute -right-2 -top-0.5 opacity-100": !open,*/}
                  {/*        "hidden opacity-0": open*/}
                  {/*      }*/}
                  {/*    )}*/}
                  {/*    variant={"destructive"}>{link.badge}</Badge>*/}
                  {/*)}*/}
                </div>
                <motion.span
                  animate={{
                    display: open ? "inline-block" : "none",
                    opacity: open ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className={"whitespace-pre"}
                >{link.label}</motion.span>
              </div>

              {/*<motion.div*/}
              {/*  animate={*/}
              {/*    {*/}
              {/*      display: open ? "inline-block" : "none",*/}
              {/*      opacity: open ? 1 : 0,*/}
              {/*    }*/}
              {/*  }*/}
              {/*>*/}
              {/*  {link.badge && (*/}
              {/*    <Badge className={"rounded-md"} variant={"destructive"}>{link.badge}</Badge>*/}
              {/*  )}*/}
              {/*</motion.div>*/}
            </Link>
          ))}
        </div>
      </div>
      <div className={clsx("flex gap-x-3 items-center py-2 px-3 cursor-pointer text-[#C0C0C0]", {
        "justify-center": !open,
      })} onClick={() => setOpen(!open)}>
        {open ? <MdOutlineKeyboardArrowLeft className={"w-5 h-5"}/> :
          <MdOutlineKeyboardArrowRight className={"w-5 h-5"}/>}
        <motion.span
          animate={{
            display: open ? "inline-block" : "none",
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={"whitespace-pre"}
        >Minimize
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Sidebar