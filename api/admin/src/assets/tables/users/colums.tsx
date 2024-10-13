import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../components/tableHeader"
import { Checkbox } from "@/components/ui/checkbox"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Users = {
  _id: string
  email: string
  username: string
  level: string
  phoneNumber: string
  membership:string
}

export const columns: ColumnDef<Users>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "membership",
    header: "Membership",
    cell: ({row})=>{
      const user = row.original
      return(
        <>
          {
            user.membership == "" ? "--" : user.membership 
          }
        </>
      )
    }
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const user = row.original
  //     console.log(user)

  //     return (
  //       <div className="dropRight float-right">
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <MoreHorizontal className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem
  //               onClick={() => navigator.clipboard.writeText(user._id)}
  //             >
  //               Copy user ID
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem>View User</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </div>
  //     )
  //   },
  // },
]
