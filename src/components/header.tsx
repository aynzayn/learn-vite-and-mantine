import { AppShell, Group, NavLink } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/color-scheme-toggle';

import './header.css';

export function AppHeader() {

  return (
    <AppShell.Header >
      <Group justify="space-between" align="center" ml="xs" mr="xs">
        <Group>
          <NavLink
            href="/"
            label="Главная"
            description="Начальная страница"
            classNames={{
              root: 'nav-link',
            }}
          />

          <NavLink
            href='/periods'
            label="Заезды"
            description="Просмотр и редактирование заездов"
            classNames={{
              root: 'nav-link',
            }}
          />

          <NavLink
            href='/patients'
            label="Пациенты"
            description="Полный список пациентов"
            classNames={{
              root: 'nav-link',
            }}
          />

          <NavLink
            href='/specialists'
            label="Специалисты"
            description="Полный список специалистов"
            classNames={{
              root: 'nav-link',
            }}
          />
        </Group>
        <ColorSchemeToggle />
      </Group>
    </AppShell.Header>
  );
}
