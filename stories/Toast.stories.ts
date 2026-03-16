import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Toast from '@/components/Toast/Toast';
import "/app/globals.css";

const meta = {
    title: 'Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof Toast>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        message: "This is a default Toast message.",
        onClose: fn(),
        // fn() is a placeholder/test function, use your own for the live component, typically a setter function
    }
}
