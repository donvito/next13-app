import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">      
                Hi! 👋
                I'm Melvin! aka ✨DonvitoCodes✨ I work as a Software Engineer and I am living in Singapore. I also livestream about Tech & Startups in Twitch.   

                Please support me in my Twitch Channel!    

                <Link href="/profile">My Profile</Link>    
        </p>            
     </div>       
    
    </main>
  )
}
