import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Footer from '@/components/Footer/Footer';

const meta = {
    title: 'Footer',
    component: Footer,
    parameters: {
        layout: 'padded',
    }
} satisfies Meta<typeof Footer>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    }
}
