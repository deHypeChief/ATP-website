import Header from '@/components/blocks/header/header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/coaches')({
  component: () => <Coaches/>,
})


function Coaches() {
  return (
    <div className="coaches">
      <Header title='Coaches' subText='Create and manage your coaches here'></Header>
    </div>
  )
}