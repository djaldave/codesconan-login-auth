"use client";
import {signIn, signOut, useSession} from "next-auth/react";

export default function SignInButton() {

	const {data: session} = useSession();

	if(session && session.user) {
		return (
			<div className={"flex gap-4 ml-auto"}>
				{/*align and center the text to the button */}
				<div className={"flex items-center"}>
					{/*display the user's name */}
					{session.user.name}
				</div>
				<button
					onClick={() => signOut()}
					className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
					Sign Out
				</button>
			</div>
		);
	}
	return (
		<button onClick={() => signIn()} className="bg-sky-600 ml-auto hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
			Sign In
		</button>
	)
}