import { useEffect, useRef, useState } from 'react';
import { ViewGrid } from 'iconoir-react';
import {
  SearchInput,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  ThemeToggle,
} from '@snc-software/snc-ui';
import type { SearchInputOption, Theme } from '@snc-software/snc-ui';
import { SEARCHABLE_ROUTES, SEARCH_DEBOUNCE_MS } from './AppShell.constants';
import { classes } from './AppShell.styles';
import type { AppShellProps } from './AppShell.types';

export function AppShell({ children }: AppShellProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [results, setResults] = useState<SearchInputOption[]>([]);
  const [searching, setSearching] = useState(false);
  const searchTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    return () => document.documentElement.classList.remove('dark');
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  function handleSearch(query: string) {
    const term = query.trim().toLowerCase();
    clearTimeout(searchTimeout.current);

    if (!term) {
      setResults([]);
      setSearching(false);
      return;
    }

    setSearching(true);
    searchTimeout.current = setTimeout(() => {
      setResults(
        SEARCHABLE_ROUTES.filter((route) => route.label.toLowerCase().includes(term)),
      );
      setSearching(false);
    }, SEARCH_DEBOUNCE_MS);
  }

  return (
    <div className={classes.page}>
      <SidebarProvider defaultOpen className={classes.provider}>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className={classes.brand}>
              <div className={classes.brandMark}>S</div>
              <div className={classes.brandName}>SNC</div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Overview">
                      <span className={classes.navIcon}>
                        <ViewGrid width={16} height={16} strokeWidth={1.6} />
                      </span>
                      <span>Overview</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className={classes.header}>
            <div className={classes.headerStart}>
              <SidebarTrigger />
            </div>

            <div className={classes.headerSearch}>
              <SearchInput
                options={results}
                isLoading={searching}
                placeholder="Search"
                aria-label="Search"
                debounceMs={200}
                noResultsMessage="No matches"
                onSearch={handleSearch}
              />
            </div>

            <div className={classes.headerEnd}>
              <ThemeToggle theme={theme} label="Toggle theme" onToggle={toggleTheme} />
            </div>
          </header>

          <main className={classes.main}>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
