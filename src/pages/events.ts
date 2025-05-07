const today = new Date().toISOString().split('T')[0];

const events = [
 {
    resourceId: '1',
    title: 'Акбутин Арсен по 6',
    start: '2025-05-07T09:10:00',
    end: '2025-05-07T09:45:00'
  },
  {
    resourceId: '1',
    title: 'Дячок Максим по 6',
    start: '2025-05-07T09:45:00',
    end: '2025-05-07T10:20:00'
  },
  {
    resourceId: '1',
    title: 'Арсланов Богдан инд.  С 28 ПО 6',
    start: '2025-05-07T10:20:00',
    end: '2025-05-07T10:55:00'
  },
  {
    resourceId: '1',
    title: 'Гилязов Алмаз с 28-6',
    start: '2025-05-07T10:55:00',
    end: '2025-05-07T11:30:00'
  },
  {
    resourceId: '1',
    title: 'Поповичев Матвей с 21-30 апреля',
    start: '2025-05-07T11:30:00',
    end: '2025-05-07T12:05:00'
  },
].map(({resourceId, start, end, ...rest}) => ({
  ...rest,
  resourceId: resourceId.padStart(4, '0'),
  start: [today, start.split('T')[1]].join('T'),
  end: [today, end.split('T')[1]].join('T'),
}));

export default events;
