import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import StandardButton from '@/components/Buttons/StandardButton';
import "/app/globals.css";

const meta = {
    title: 'Standard Button',
    component: StandardButton,
    parameters: {
        layout: 'padded',
    }
} satisfies Meta<typeof StandardButton>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
    }
}
