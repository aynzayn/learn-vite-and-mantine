import { useEffect } from 'react';

import { AppShell, Center, Table, Group } from '@mantine/core';

import { AppHeader } from '../../components/header';
import { useSpecialistsStore } from '../../stores/specialists-store';
import { AddSpecialist } from './add-specialist';
import { AddProcedureToSpecialist } from './add-procedure-to-specialist';

export function SpecialistsPage() {
  const { specialists, fetch } = useSpecialistsStore();

  useEffect(() => {
    fetch();
  }, []);

  const rows = specialists?.map((specialist) => (
    <Table.Tr key={specialist.id}>
      <Table.Td>
        <Group justify="space-between">
          {specialist.procedures.map(({name}) => name).join(', ')}
          <AddProcedureToSpecialist id={specialist.id}/>
        </Group>
      </Table.Td>
      <Table.Td>{specialist.fullName}</Table.Td>
      <Table.Td>
        {specialist.id}
      </Table.Td>
    </Table.Tr>
  ));

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
        <AddSpecialist />
      </AppShell.Navbar>
      <AppShell.Main>
        <Center maw={800}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Специальность</Table.Th>
                <Table.Th>ФИО</Table.Th>
                <Table.Th>Никнейм</Table.Th>
                <Table.Th maw={80}>Кабинет</Table.Th>
                <Table.Th maw={80}>График работы</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
