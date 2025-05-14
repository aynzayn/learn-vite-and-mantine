import { useEffect } from 'react';

import { AppShell, Center, Table } from '@mantine/core';

import { AppHeader } from '../../components/header';
import { usePatientsStore } from '../../stores/patients-store';

import { AddPatient } from './add-patient';

export function PatientsPage() {
  const { patients, fetch } = usePatientsStore();

  useEffect(() => {
    fetch();
  }, []);

  const rows = patients?.map((patient) => (
    <Table.Tr key={patient.id}>
      <Table.Td>{ patient.id }</Table.Td>
      <Table.Td>
        { patient.fullName }
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
        <AddPatient />
      </AppShell.Navbar>

      <AppShell.Main>
        <Center maw={800}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Никнейм</Table.Th>
                <Table.Th>ФИО</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
