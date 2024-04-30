import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user} = useAuth0();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const mpesaTest = async()=> {
    await fetch(`${API_BASE_URL}/payment/mpesa`)
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className= "text-orange-500"/>
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated? <span className="flex items-center font-bold gap-2">
            <CircleUserRound className="text-orange-500" />
            {user?.email}
          </span> : (
            <span>Welcome to Bytes</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? <MobileNavLinks /> : (
            <Button
              onClick={()=> loginWithRedirect()} 
              className="flex-1 font-bold bg-orange-500">Log In</Button>
          )}
          <Button onClick={mpesaTest} >MPESA TEST</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
