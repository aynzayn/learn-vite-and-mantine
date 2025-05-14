import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Fieldset, NativeSelect, TextInput } from '@mantine/core';
import data from './doctors';
import patients from './patients';

export function AddTreatment() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Добавление лечения">
        <Fieldset legend="Лечение">
          <NativeSelect label="ФИО" data={patients.map(({ fullName }) => fullName).sort()} />
          <NativeSelect label="Тип" data={data.map(({ name }) => name).sort()} />
          <TextInput label="Специалист" placeholder="Специалист" mt="md" />
        </Fieldset>
      </Modal>

      <Button variant="default" onClick={open}>
        Добавить лечение
      </Button>
    </>
  );
}
