import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../components/tableHeader"

export type Coaches = {
	name: string;
	email: string;
	profileImageUrl: string;
	avgRate: number;
	comment: [];
}

export const columns: ColumnDef<Coaches>[] = [
	{
		accessorKey: "profileImageUrl",
		header: "Profile",
		size: 80,
		cell: ({ row }) => {
			const user = row.original
			return (
				<>
					<div className="proBoxImg">
						<img src={user.profileImageUrl} alt="" />
					</div>
				</>
			)
		}
	},
	{
		accessorKey: "name",
		header: "Coach Name"
	},
	{
		accessorKey: "email",
		header: "Email"
	},
	{
		accessorKey: "avgRate",
		header: "Rating"
	},
	{
		accessorKey: "comment",
		header: "Comment Count",
		cell: ({ row }) => {
			const user = row.original
			console.log(user)
			return (
				<>
					{user.comment.length}
				</>
			)
		}
	}
]
