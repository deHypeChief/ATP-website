/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminImport } from './routes/_admin'
import { Route as IndexImport } from './routes/index'
import { Route as AuthForgotPasswordImport } from './routes/_auth/forgotPassword'
import { Route as AuthCreateAdminImport } from './routes/_auth/createAdmin'
import { Route as AdminUsersImport } from './routes/_admin/users'
import { Route as AdminTournamentsImport } from './routes/_admin/tournaments'
import { Route as AdminSettingsImport } from './routes/_admin/settings'
import { Route as AdminPlanImport } from './routes/_admin/plan'
import { Route as AdminMatchesImport } from './routes/_admin/matches'
import { Route as AdminLeaderboardImport } from './routes/_admin/leaderboard'
import { Route as AdminDashboardImport } from './routes/_admin/dashboard'
import { Route as AdminCoachesImport } from './routes/_admin/coaches'
import { Route as AdminBillingsImport } from './routes/_admin/billings'

// Create/Update Routes

const AdminRoute = AdminImport.update({
  id: '/_admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  path: '/forgotPassword',
  getParentRoute: () => rootRoute,
} as any)

const AuthCreateAdminRoute = AuthCreateAdminImport.update({
  path: '/createAdmin',
  getParentRoute: () => rootRoute,
} as any)

const AdminUsersRoute = AdminUsersImport.update({
  path: '/users',
  getParentRoute: () => AdminRoute,
} as any)

const AdminTournamentsRoute = AdminTournamentsImport.update({
  path: '/tournaments',
  getParentRoute: () => AdminRoute,
} as any)

const AdminSettingsRoute = AdminSettingsImport.update({
  path: '/settings',
  getParentRoute: () => AdminRoute,
} as any)

const AdminPlanRoute = AdminPlanImport.update({
  path: '/plan',
  getParentRoute: () => AdminRoute,
} as any)

const AdminMatchesRoute = AdminMatchesImport.update({
  path: '/matches',
  getParentRoute: () => AdminRoute,
} as any)

const AdminLeaderboardRoute = AdminLeaderboardImport.update({
  path: '/leaderboard',
  getParentRoute: () => AdminRoute,
} as any)

const AdminDashboardRoute = AdminDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AdminRoute,
} as any)

const AdminCoachesRoute = AdminCoachesImport.update({
  path: '/coaches',
  getParentRoute: () => AdminRoute,
} as any)

const AdminBillingsRoute = AdminBillingsImport.update({
  path: '/billings',
  getParentRoute: () => AdminRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_admin': {
      id: '/_admin'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/_admin/billings': {
      id: '/_admin/billings'
      path: '/billings'
      fullPath: '/billings'
      preLoaderRoute: typeof AdminBillingsImport
      parentRoute: typeof AdminImport
    }
    '/_admin/coaches': {
      id: '/_admin/coaches'
      path: '/coaches'
      fullPath: '/coaches'
      preLoaderRoute: typeof AdminCoachesImport
      parentRoute: typeof AdminImport
    }
    '/_admin/dashboard': {
      id: '/_admin/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AdminDashboardImport
      parentRoute: typeof AdminImport
    }
    '/_admin/leaderboard': {
      id: '/_admin/leaderboard'
      path: '/leaderboard'
      fullPath: '/leaderboard'
      preLoaderRoute: typeof AdminLeaderboardImport
      parentRoute: typeof AdminImport
    }
    '/_admin/matches': {
      id: '/_admin/matches'
      path: '/matches'
      fullPath: '/matches'
      preLoaderRoute: typeof AdminMatchesImport
      parentRoute: typeof AdminImport
    }
    '/_admin/plan': {
      id: '/_admin/plan'
      path: '/plan'
      fullPath: '/plan'
      preLoaderRoute: typeof AdminPlanImport
      parentRoute: typeof AdminImport
    }
    '/_admin/settings': {
      id: '/_admin/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AdminSettingsImport
      parentRoute: typeof AdminImport
    }
    '/_admin/tournaments': {
      id: '/_admin/tournaments'
      path: '/tournaments'
      fullPath: '/tournaments'
      preLoaderRoute: typeof AdminTournamentsImport
      parentRoute: typeof AdminImport
    }
    '/_admin/users': {
      id: '/_admin/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AdminUsersImport
      parentRoute: typeof AdminImport
    }
    '/_auth/createAdmin': {
      id: '/_auth/createAdmin'
      path: '/createAdmin'
      fullPath: '/createAdmin'
      preLoaderRoute: typeof AuthCreateAdminImport
      parentRoute: typeof rootRoute
    }
    '/_auth/forgotPassword': {
      id: '/_auth/forgotPassword'
      path: '/forgotPassword'
      fullPath: '/forgotPassword'
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface AdminRouteChildren {
  AdminBillingsRoute: typeof AdminBillingsRoute
  AdminCoachesRoute: typeof AdminCoachesRoute
  AdminDashboardRoute: typeof AdminDashboardRoute
  AdminLeaderboardRoute: typeof AdminLeaderboardRoute
  AdminMatchesRoute: typeof AdminMatchesRoute
  AdminPlanRoute: typeof AdminPlanRoute
  AdminSettingsRoute: typeof AdminSettingsRoute
  AdminTournamentsRoute: typeof AdminTournamentsRoute
  AdminUsersRoute: typeof AdminUsersRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminBillingsRoute: AdminBillingsRoute,
  AdminCoachesRoute: AdminCoachesRoute,
  AdminDashboardRoute: AdminDashboardRoute,
  AdminLeaderboardRoute: AdminLeaderboardRoute,
  AdminMatchesRoute: AdminMatchesRoute,
  AdminPlanRoute: AdminPlanRoute,
  AdminSettingsRoute: AdminSettingsRoute,
  AdminTournamentsRoute: AdminTournamentsRoute,
  AdminUsersRoute: AdminUsersRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AdminRouteWithChildren
  '/billings': typeof AdminBillingsRoute
  '/coaches': typeof AdminCoachesRoute
  '/dashboard': typeof AdminDashboardRoute
  '/leaderboard': typeof AdminLeaderboardRoute
  '/matches': typeof AdminMatchesRoute
  '/plan': typeof AdminPlanRoute
  '/settings': typeof AdminSettingsRoute
  '/tournaments': typeof AdminTournamentsRoute
  '/users': typeof AdminUsersRoute
  '/createAdmin': typeof AuthCreateAdminRoute
  '/forgotPassword': typeof AuthForgotPasswordRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AdminRouteWithChildren
  '/billings': typeof AdminBillingsRoute
  '/coaches': typeof AdminCoachesRoute
  '/dashboard': typeof AdminDashboardRoute
  '/leaderboard': typeof AdminLeaderboardRoute
  '/matches': typeof AdminMatchesRoute
  '/plan': typeof AdminPlanRoute
  '/settings': typeof AdminSettingsRoute
  '/tournaments': typeof AdminTournamentsRoute
  '/users': typeof AdminUsersRoute
  '/createAdmin': typeof AuthCreateAdminRoute
  '/forgotPassword': typeof AuthForgotPasswordRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_admin': typeof AdminRouteWithChildren
  '/_admin/billings': typeof AdminBillingsRoute
  '/_admin/coaches': typeof AdminCoachesRoute
  '/_admin/dashboard': typeof AdminDashboardRoute
  '/_admin/leaderboard': typeof AdminLeaderboardRoute
  '/_admin/matches': typeof AdminMatchesRoute
  '/_admin/plan': typeof AdminPlanRoute
  '/_admin/settings': typeof AdminSettingsRoute
  '/_admin/tournaments': typeof AdminTournamentsRoute
  '/_admin/users': typeof AdminUsersRoute
  '/_auth/createAdmin': typeof AuthCreateAdminRoute
  '/_auth/forgotPassword': typeof AuthForgotPasswordRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/billings'
    | '/coaches'
    | '/dashboard'
    | '/leaderboard'
    | '/matches'
    | '/plan'
    | '/settings'
    | '/tournaments'
    | '/users'
    | '/createAdmin'
    | '/forgotPassword'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/billings'
    | '/coaches'
    | '/dashboard'
    | '/leaderboard'
    | '/matches'
    | '/plan'
    | '/settings'
    | '/tournaments'
    | '/users'
    | '/createAdmin'
    | '/forgotPassword'
  id:
    | '__root__'
    | '/'
    | '/_admin'
    | '/_admin/billings'
    | '/_admin/coaches'
    | '/_admin/dashboard'
    | '/_admin/leaderboard'
    | '/_admin/matches'
    | '/_admin/plan'
    | '/_admin/settings'
    | '/_admin/tournaments'
    | '/_admin/users'
    | '/_auth/createAdmin'
    | '/_auth/forgotPassword'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
  AuthCreateAdminRoute: typeof AuthCreateAdminRoute
  AuthForgotPasswordRoute: typeof AuthForgotPasswordRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  AuthCreateAdminRoute: AuthCreateAdminRoute,
  AuthForgotPasswordRoute: AuthForgotPasswordRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_admin",
        "/_auth/createAdmin",
        "/_auth/forgotPassword"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_admin": {
      "filePath": "_admin.tsx",
      "children": [
        "/_admin/billings",
        "/_admin/coaches",
        "/_admin/dashboard",
        "/_admin/leaderboard",
        "/_admin/matches",
        "/_admin/plan",
        "/_admin/settings",
        "/_admin/tournaments",
        "/_admin/users"
      ]
    },
    "/_admin/billings": {
      "filePath": "_admin/billings.tsx",
      "parent": "/_admin"
    },
    "/_admin/coaches": {
      "filePath": "_admin/coaches.tsx",
      "parent": "/_admin"
    },
    "/_admin/dashboard": {
      "filePath": "_admin/dashboard.tsx",
      "parent": "/_admin"
    },
    "/_admin/leaderboard": {
      "filePath": "_admin/leaderboard.tsx",
      "parent": "/_admin"
    },
    "/_admin/matches": {
      "filePath": "_admin/matches.tsx",
      "parent": "/_admin"
    },
    "/_admin/plan": {
      "filePath": "_admin/plan.tsx",
      "parent": "/_admin"
    },
    "/_admin/settings": {
      "filePath": "_admin/settings.tsx",
      "parent": "/_admin"
    },
    "/_admin/tournaments": {
      "filePath": "_admin/tournaments.tsx",
      "parent": "/_admin"
    },
    "/_admin/users": {
      "filePath": "_admin/users.tsx",
      "parent": "/_admin"
    },
    "/_auth/createAdmin": {
      "filePath": "_auth/createAdmin.tsx"
    },
    "/_auth/forgotPassword": {
      "filePath": "_auth/forgotPassword.tsx"
    }
  }
}
ROUTE_MANIFEST_END */