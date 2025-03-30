import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./components/ui/button"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu"
import { DarkMode } from "./pages/DarkMode"

export const MobileNavbar = () => {
  const role = "instructor"
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline">
          <Menu />

        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>E-Learning</SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex flex-col space-y-4">
          <span>My Learning</span>
          <span>Edit Profile</span>
          <span>Log out</span>
        </nav>
        {
          role === "instructor" && (

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="w-full">Dashboard</Button>
              </SheetClose>
            </SheetFooter>
          )
        }

      </SheetContent>
    </Sheet>

  )

}