import { useCallback } from 'react';

import { Button, Group, Modal, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { usePatientsStore } from '../../stores/patients-store';

import { translit } from './translit';

export function AddPatient() {
  const [opened, { open, close }] = useDisclosure(false);
  const { create } = usePatientsStore();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
    },
    validate: {
      fullName: isNotEmpty('Обязательно к заполнению'),
    },
  });

  const handleSubmit = useCallback((values: typeof form.values) => {
    const id = translit(values.fullName.split(' ').map((str, idx) => !idx ? str : str[0]).join(''));

    create({
      id,
      fullName: values.fullName,
    })

    close();
    form.reset();
  }, []);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Добавление пациента">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="ФИО"
            placeholder="ФИО"
            key={form.key('fullName')}
            {...form.getInputProps('fullName')}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Сохранить</Button>
          </Group>
        </form>
      </Modal>

      <Button variant="default" onClick={open} color="gray" radius="md">Добавить пациента</Button>
    </>
  );
}
