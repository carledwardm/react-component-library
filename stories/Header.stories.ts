import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Header from '@/components/Header/Header';

const meta = {
    title: 'Header',
    component: Header,
    parameters: {
        layout: 'padded',
    }
} satisfies Meta<typeof Header>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    }
}
