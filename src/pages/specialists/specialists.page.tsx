import { useEffect } from 'react';
import dayjs from 'dayjs';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Input, Center } from '@mantine/core';

import { Table } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { AppHeader } from '../../components/header';
import { useSpecialistsStore } from '../../stores/specialists-store';

export function SpecialistsPage() {
  const { specialists, fetch } = useSpecialistsStore();

  useEffect(() => {
    fetch();
  }, []);

  const rows = specialists?.map((specialists) => (
    <Table.Tr key={specialists.id}>
      <Table.Td><Input value={specialists.name} /></Table.Td>
      <Table.Td maw={80}>
        <DateInput
          valueFormat="D MMMM YYYY"
          locale="ru"
          minDate={dayjs().format('YYYY-MM-DD')}
          value={dayjs(specialists.startDate)}
          placeholder="Date input"
        />
      </Table.Td>
      <Table.Td maw={80}>
        <DateInput
          locale="ru"
          valueFormat="D MMMM YYYY"
          value={dayjs(specialists.endDate)}
          placeholder="Date input"
        />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppHeader />
      <AppShell.Main>
        <Center maw={800}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ФИО</Table.Th>
                <Table.Th maw={80}>Специальность</Table.Th>
                <Table.Th maw={80}>Кабинет</Table.Th>
                <Table.Th maw={80}>График работы</Table.Th>
                <Table.Th maw={80}>Дни работы</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
