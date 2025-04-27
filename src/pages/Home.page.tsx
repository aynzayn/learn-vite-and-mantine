import { useDisclosure } from '@mantine/hooks';
import { AppShell, Button, Burger, Divider, Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // a plugin!

import treatment from './treatment';
import events from './events';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Header >
        <Group align="center">
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
          />
          <Button>Добавить лечение</Button>
          <Button>Добавить врача</Button>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Calendar />
        <Divider my="md" />
      </AppShell.Navbar>

      <AppShell.Main>
        <FullCalendar
          plugins={[ resourceTimeGridPlugin  ]}
          initialView="resourceTimeGridDay"
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          slotDuration={"00:10:00"}
          slotMinTime={"08:00:00"}
          slotMaxTime={"20:00:00"}
          resources={treatment}
          locale={'ru'}
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
