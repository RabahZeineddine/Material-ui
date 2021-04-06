import React from 'react'

export type TabsProps = {
    children: React.ReactNode,
    fullWidth?: boolean
}

export type TabProps = {
    label: string;
    component: React.ReactNode;
    disabled?: boolean;
    hideOnSwitch?: boolean;
    componentProps?: { [key: string]: any };
};

export type TabPanelProps = {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
    hideOnSwitch?: boolean;
}
