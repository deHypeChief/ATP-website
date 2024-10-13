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
  tourTitle: string
  username: string
  tourCheck: string
  paid: string
  medal: string
}

export const columns: ColumnDef<Tour>[] = [
  {
    accessorKey: "tourTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tour Title" />
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "tourCheck",
    header: "Ticket Checked",
  },
  {
    accessorKey: "paid",
    header: "Payment Made",
  },
  {
    accessorKey: "medal",
    header: "Medal",
  }
]
