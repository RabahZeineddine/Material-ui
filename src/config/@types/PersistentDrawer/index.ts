import React from 'react'

export type PersistentDrawerType = {
    children: React.ReactNode
    title?: string
}


export type DrawerPageProps = {
    component: React.ReactNode,
    id: string,
    icon: React.ReactNode,
    label: string
    selected?: boolean
}