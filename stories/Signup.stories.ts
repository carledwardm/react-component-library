import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Signup from '@/components/Signup/Signup';
import "/app/globals.css";

const meta = {
    title: 'Signup',
    component: Signup,
    parameters: {
        layout: 'padded',
    }
} satisfies Meta<typeof Signup>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    }
}
