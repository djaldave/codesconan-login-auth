import Image from 'next/image'

export default function Home() {
  return (
    /*center text*/
    <div className={"flex flex-col items-center mt-4"}>
        <h1 className={"text-4xl font-bold"}>Welcome to Codes Conan</h1>
        <p className={"text-xl"}>This is a Next.js app with NextAuth.js authentication</p>

    </div>
  )
}
