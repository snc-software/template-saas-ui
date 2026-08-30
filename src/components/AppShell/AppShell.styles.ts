import { cn } from '@/utils';

export const classes = {
  page: cn('flex min-h-screen w-full items-stretch bg-snc-background text-snc-text-primary'),
  provider: cn('flex min-h-screen w-full items-stretch'),

  brand: cn('flex items-center gap-2.5 overflow-hidden px-1 py-0.5'),
  brandMark: cn(
    'grid size-[30px] shrink-0 place-items-center rounded-md bg-snc-primary font-snc-heading text-sm font-bold text-white',
  ),
  brandName: cn(
    'overflow-hidden text-ellipsis whitespace-nowrap font-snc-heading text-[15px] font-bold tracking-tight',
  ),

  navIcon: cn('grid size-4 shrink-0 place-items-center'),

  header: cn(
    'sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b border-snc-border bg-snc-surface px-5',
  ),
  headerStart: cn('flex min-w-0 flex-1 items-center gap-2'),
  headerSearch: cn('min-w-[140px] flex-[0_1_460px]'),
  headerEnd: cn('flex flex-1 items-center justify-end'),

  main: cn('flex w-full max-w-[1360px] flex-1 flex-col gap-5 px-6 pt-7 pb-10'),
} as const;
