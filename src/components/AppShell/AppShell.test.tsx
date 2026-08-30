import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('renders the brand mark and the Overview nav item', () => {
    render(
      <AppShell>
        <p>Routed content</p>
      </AppShell>,
    );

    expect(screen.getByText('SNC')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Overview' })).toBeInTheDocument();
  });

  it('renders its children inside the main content area', () => {
    render(
      <AppShell>
        <p>Routed content</p>
      </AppShell>,
    );

    expect(screen.getByText('Routed content')).toBeInTheDocument();
  });

  it('toggles the document theme when the theme toggle is clicked', async () => {
    const { default: userEvent } = await import('@testing-library/user-event');
    const user = userEvent.setup();

    render(
      <AppShell>
        <p>Routed content</p>
      </AppShell>,
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
