import { useCallback } from 'react';

import { Button, Group, Modal, MultiSelect, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { useSpecialistsStore } from '../../stores/specialists-store';

import { translit } from '../../utils/translit';
import { fullNameToShort } from '../../utils/fullNameToShort';

export function AddSpecialist() {
  const [opened, { open, close }] = useDisclosure(false);
  const { procedures, create } = useSpecialistsStore();

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
    const id = translit(fullNameToShort().replace('.', '').replace(' ', ''));

    create({
      id,
      fullName: values.fullName,
    })

    close();
    form.reset();
  }, []);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Добавление специалиста">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
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
            placeholder="Pick value"
            hidePickedOptions
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Сохранить</Button>
          </Group>
        </form>
      </Modal>

      <Button variant="default" onClick={open} color="gray" radius="md">Добавить специалиста</Button>
    </>
  );
}
