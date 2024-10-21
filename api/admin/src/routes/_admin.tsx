import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import "../assets/style/routes/adminLayout.css"
import { Header4 } from '@/components/typography'
import { BadgeInfo, Database, LayoutDashboard, Settings } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useAuth } from '@/hooks/use-auth'

export const Route = createFileRoute('/_admin')({
    beforeLoad: async ({ context }) => {
        const { isAuthenticated } = context.authentication;
        const auth = await isAuthenticated()
        if (!auth) {
            throw redirect({ to: '/' });
        }
    },
    component: () => <AdminLayout />,
})

function AdminLayout() {
    const { admin } = useAuth()
    const links = [
        {
            name: "Users",
            link: "/users",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" strokeWidth={1.7}>
                        <circle cx={12} cy={6} r={4}></circle>
                        <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path>
                    </g>
                </svg>
            )
        },
        {
            name: "Matches",
            link: "/matches",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path d="M10.7 4.7c3-3 7.4-3.6 9.8-1.2s1.8 6.8-1.2 9.8a9.5 9.5 0 0 1-4.3 2.5c-2.1.5-4.1.1-5.5-1.3S7.7 11.1 8.2 9a9.5 9.5 0 0 1 2.5-4.3"></path>
                    <path d="M8.2 9L6 18l9-2.2M2 22l4-4"></path>
                    <circle cx={20} cy={20} r={2}></circle>
                </g>
            </svg>)
        },
        {
            name: "Tournaments",
            link: "/tournaments",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" strokeWidth={1.7}>
                        <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path>
                        <path strokeLinecap="round" d="M12 16v3"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></path>
                        <path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                        <path strokeLinecap="round" d="M18 22H6"></path>
                    </g>
                </svg>
            )
        },
        {
            name: "Coaches",
            link: "/coaches",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                    <g fill="none" stroke="white" strokeWidth={1.7}>
                        <path d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"></path>
                        <path strokeLinecap="round" d="M12 16v3"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"></path>
                        <path d="m19 5l.949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5m4.646-6.477C11.526 5.34 11.716 5 12 5s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></path>
                        <path strokeLinecap="round" d="M18 22H6"></path>
                    </g>
                </svg>
            )
        }
    ]
    return (
        <section className="layoutSet">
            <div className="layoutLeft ">
                <div className="listWrap">

                    <div className="listMain">
                        <div className="logoInfo">
                            <div className="logo">
                                <BadgeInfo size={28} />
                            </div>
                            <div className="logoText">
                                <Header4>ATP Admin.</Header4>
                            </div>
                        </div>
                        <div className="list">
                            {
                                links.map(link =>
                                    <Link key={link.name} to={link.link} className={(({ isActive }) => isActive && "active").toString()}>
                                        {link.icon}
                                        <p>{link.name}</p>
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    <div className="listMain">
                        {/* base action */}

                        <div className="listProfile">
                            <div className="o"></div>
                            <div className="oContent">
                                <p>{admin()?.name}</p>
                                <p>{admin()?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layoutRight">
                <Outlet />
            </div>
        </section>
    )
}

