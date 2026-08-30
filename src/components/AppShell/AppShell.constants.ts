import type { SearchableRoute } from './AppShell.types';

export const SEARCHABLE_ROUTES: SearchableRoute[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'settings', label: 'Settings' },
  { value: 'members', label: 'Team members' },
  { value: 'billing', label: 'Billing' },
  { value: 'api-keys', label: 'API keys' },
  { value: 'audit-log', label: 'Audit log' },
];

export const SEARCH_DEBOUNCE_MS = 260;
