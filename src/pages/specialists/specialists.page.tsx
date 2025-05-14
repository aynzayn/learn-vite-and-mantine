import { useEffect } from 'react';

import { AppShell, Center, Input, Table } from '@mantine/core';

import { AppHeader } from '../../components/header';
import { useSpecialistsStore } from '../../stores/specialists-store';

export function SpecialistsPage() {
  const { specialists, fetch } = useSpecialistsStore();

  useEffect(() => {
    fetch();
  }, []);

  const rows = specialists?.map((specialist) => (
    <Table.Tr key={specialist.id}>
      <Table.Td><Input value={specialist.fullName} /></Table.Td>
      <Table.Td>
        <Input value={specialist.procedure.name}/>
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
                <Table.Th>Специальность</Table.Th>
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
