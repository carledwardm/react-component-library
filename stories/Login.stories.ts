import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Login from '@/components/Login/Login';

const meta = {
    title: 'Login',
    component: Login,
    parameters: {
        layout: 'padded',
    }
} satisfies Meta<typeof Login>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Login',
    }
}
