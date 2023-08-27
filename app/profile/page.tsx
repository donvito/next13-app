
import Link from 'next/link'

async function getData() {
    
    const res = await fetch('http://127.0.0.1:3000/api/user')

    console.log(res)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log('FAILED to fetch data')
      throw new Error('Failed to fetch data')
    }

    // let data = {
    //     name: 'DonvitoCodes',
    //     age: 38
    // }

    // return data

    return res.json()

}   


export default async function Profile() {

  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">      
                Hi! 👋
                Im {data.data.name} and {data.data.age} years old ! aka ✨DonvitoCodes✨ I work as a Software Engineer and I am living in Singapore. I also livestream about Tech & Startups in Twitch.  

                <Link href="/">Back Home</Link>             
        </p>            
     </div>             
    </main>
  )
}