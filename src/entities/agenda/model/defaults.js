export const createDefaultAgenda = () => ({
  active: true,
  purged: false,
});

export const createDefaultAgendas = () => ({});

export const isDefault = ({ active, purged }) =>
  !active && !purged;
