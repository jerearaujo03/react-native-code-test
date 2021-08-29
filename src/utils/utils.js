export const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
  {label: 'Undisclosed', value: 'undisclosed'},
];

export const getGenderLabel = value =>
  genders.find(g => g.value === value)?.label;
