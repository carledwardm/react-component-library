import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import StandardButton from '@/components/Buttons/StandardButton';
import "/app/globals.css";

const meta = {
    title: 'StandardButton',
    component: StandardButton,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof StandardButton>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        size: "small",
        text: 'Default Text'
    }
}

export const Small: Story = {
  args: {
    primary: true,
    size: 'small',
    text: 'Default Text',
  },
};

export const Med: Story = {
  args: {
    primary: true,
    size: 'med',
    text: 'Default Text',
  },
};

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    text: 'Default Text',
  },
};
