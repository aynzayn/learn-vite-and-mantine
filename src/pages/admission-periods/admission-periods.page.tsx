import { useEffect } from 'react';
import dayjs from 'dayjs';

import { AppShell, Center, Input, Table } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import { AppHeader } from '../../components/header';
import { useAdmissAdmissionStore } from '../../stores/admission-periods-store';

export function AdmissionPeriodsPage() {
  const { periods, fetch } = useAdmissAdmissionStore();

  useEffect(() => {
    fetch();
  }, []);

  const rows = periods?.map((period) => (
    <Table.Tr key={period.name}>
      <Table.Td><Input value={period.name} /></Table.Td>
      <Table.Td maw={80}>
        <DateInput
          valueFormat="D MMMM YYYY"
          locale="ru"
          minDate={dayjs().format('YYYY-MM-DD')}
          value={dayjs(period.startDate)}
          placeholder="Date input"
        />
      </Table.Td>
      <Table.Td maw={80}>
        <DateInput
          locale="ru"
          valueFormat="D MMMM YYYY"
          value={dayjs(period.endDate)}
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
                <Table.Th>Наименование</Table.Th>
                <Table.Th maw={80}>Начало</Table.Th>
                <Table.Th maw={80}>Окончание</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
