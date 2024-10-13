import Header from '@/components/blocks/header/header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/settings')({
  component: () => <Settings/>,
})

function Settings() {
  return (
    <div className="settings">
      <Header title='Settings' subText='Create and manage your settings here'></Header>
    </div>
  )
}