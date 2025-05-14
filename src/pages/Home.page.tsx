import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // a plugin!

import { AppShell, Divider } from '@mantine/core';
import { Calendar } from '@mantine/dates';

import { AppHeader } from '../components/header';

import events from './events';
import { useSpecialistsStore } from '../stores/specialists-store';
import { useEffect } from 'react';
import { fullNameToShort } from '../utils/fullNameToShort';

export function HomePage() {
  const { specialists, fetch } = useSpecialistsStore();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppHeader />

      <AppShell.Navbar p="md">
        <Calendar />
        <Divider my="md" />
      </AppShell.Navbar>

      <AppShell.Main>
        <FullCalendar
          plugins={[ resourceTimeGridPlugin  ]}
          initialView="resourceTimeGridDay"
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          slotDuration="00:10:00"
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          resources={specialists.map(({id, fullName, procedures}) => ({id, title: `${fullNameToShort(fullName)}\n ${procedures.map(({name}) => name).join(' / ')}`}))}
          locale="ru"
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
          }}
          events={events}
        />
      </AppShell.Main>
    </AppShell>
  );
}
