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
        text: 'Default Text'
    }
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Default Text',
  },
};

export const Med: Story = {
  args: {
    size: 'med',
    label: 'Default Text',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Default Text',
  },
};
