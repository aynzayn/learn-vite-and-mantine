import { useCallback } from 'react';

import { ActionIcon, Button, Group, Modal, MultiSelect, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { useSpecialistsStore } from '../../stores/specialists-store';

interface IAddProcedureToSpecialistProps {
  // Идентификатор специалиста
  id: string;
}

export function AddProcedureToSpecialist(props: IAddProcedureToSpecialistProps) {
  const { id } = props;
  const [opened, { open, close }] = useDisclosure(false);
  const { specialists, procedures, addProcedure } = useSpecialistsStore();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: specialists.find((s) => s.id === id) || {
      fullName: '',
      procedures: [],
    },
    validate: {
      fullName: isNotEmpty('Обязательно к заполнению'),
      procedures: isNotEmpty('Обязательно к заполнению'),
    },
  });

  const handleSubmit = useCallback((values: typeof form.values) => {
    addProcedure(values)

    close();
    form.reset();
  }, [id, addProcedure]);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Редактирование специальности">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            disabled
            label="ФИО"
            placeholder="ФИО"
            key={form.key('fullName')}
            {...form.getInputProps('fullName')}
          />
          <MultiSelect
            withAsterisk
            checkIconPosition="right"
            data={procedures.map(({id, name}) => ({ value: id, label: name }))}
            label="Специализация"
            placeholder="Выберите значения"
            hidePickedOptions
            searchable
            key={form.key('procedures')}
            {...form.getInputProps('procedures')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Сохранить</Button>
          </Group>
        </form>
      </Modal>

      <ActionIcon size="sm" loaderProps={{ type: 'dots' }} onClick={open} />
    </>
  );
}
