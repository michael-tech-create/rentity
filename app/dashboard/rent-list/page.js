import { auth } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-checks";
import RentList from "./rent-list";

export default async function Page() {
    const session = await auth();
    return (
       <>
       <AuthorizationCheck/>
       <RentList userId={session?.user?.id}/>
       </>
 )
}