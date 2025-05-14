import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // a plugin!

import { AppShell, Divider } from '@mantine/core';
import { Calendar } from '@mantine/dates';

import { AppHeader } from '../components/header';

import events from './events';
import treatment from './treatment';

export function HomePage() {
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
          resources={treatment}
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
