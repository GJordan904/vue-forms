import { FieldConfigValue } from '../../interfaces';

const provincesEn: FieldConfigValue[] = [
  { label: 'Alberta', value: 'AB' },
  { label: 'British Columbia', value: 'BC' },
  { label: 'Manitoba', value: 'MB' },
  { label: 'New Brunswick', value: 'NB' },
  { label: 'Newfoundland and Labrador', value: 'NL' },
  { label: 'Northwest Territories', value: 'NT' },
  { label: 'Nova Scotia', value: 'NS' },
  { label: 'Nunavut', value: 'NU' },
  { label: 'Ontario', value: 'ON' },
  { label: 'Prince Edward Island', value: 'PE' },
  { label: 'Quebec', value: 'QC' },
  { label: 'Saskatchewan', value: 'SK' },
  { label: 'Yukon', value: 'YT' },
];

const provincesFr: FieldConfigValue[] = [
  { value: 'AB', label: 'Alberta' },
  { value: 'BC', label: 'Colombie-Britannique' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'NB', label: 'Nouveau-Brunswick' },
  { value: 'NL', label: 'Terre-Neuve-et-Labrador' },
  { value: 'NS', label: 'Nouvelle-Écosse' },
  { value: 'NT', label: 'Territoires du Nord-Ouest' },
  { value: 'NU', label: 'Nunavut' },
  { value: 'ON', label: 'Ontario' },
  { value: 'PE', label: 'Île-du-Price-Édouard' },
  { value: 'QC', label: 'Québec' },
  { value: 'SK', label: 'Saskatchewan' },
  { value: 'YT', label: 'Territoire du Yukon' },
];

export { provincesFr, provincesEn };
