import { columns } from '@/assets/tables/matches/colums'
import { MatchTable } from '@/assets/tables/matches/dataTable'
import Header from '@/components/blocks/header/header'
import InfoCard from '@/components/blocks/infoCard/infoCard'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { User } from "lucide-react"

export const Route = createFileRoute('/_admin/matches')({
  component: () => <Matches />,
})


function Matches() {
  return (
    <div className="matches">
      <Header title='Matches' subText='Verify and manage your matches here'>
        <Button>Verify Ticket</Button>
      </Header>

      <div className="userContent">
        <div className="userrDataTop ">

          <InfoCard title="Match" extraInfo='Matches created'>
            <User className="h-4 w-4 text-muted-foreground" />
          </InfoCard>

        </div>

        <div className="userData">
          <MatchTable data={[]} columns={columns}/>
        </div>
      </div>
    </div>
  )
}