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

export type Tour = {
  name: string
  category: string
  location: string
  date: string
  tournamentImgURL: string
  price:string
}

export const columns: ColumnDef<Tour>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tour Title" />
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "date",
    header: "Tour Date",
  },
  {
    accessorKey: "price",
    header: "Tour Price",
    // cell: ({row})=>{
    //   const user = row.original
    //   return(
    //     <>
    //       {
    //         user.membership == "" ? "--" : user.membership 
    //       }
    //     </>
    //   )
    // }
  }
]
